// Sistema de armazenamento local para progresso, respostas e resultados

export interface QuizProgress {
  currentQuestion: number;
  answers: Record<number, number>;
  startedAt: string;
  userName?: string;
  userAge?: number;
}

export interface QuizResult {
  id: string;
  userName: string;
  userAge: number;
  completedAt: string;
  totalScore: number;
  maturityAge: number;
  areaScores: {
    emocional: number;
    social: number;
    profissional: number;
    decisao: number;
    autoconsciencia: number;
  };
  answers: Record<number, number>;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'auto';
  hasCompletedQuiz: boolean;
  paymentStatus: 'pending' | 'completed';
}

const STORAGE_KEYS = {
  PROGRESS: 'quiz_progress',
  RESULTS: 'quiz_results',
  SETTINGS: 'app_settings',
};

// Progresso do Quiz
export function saveProgress(progress: QuizProgress): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  }
}

export function getProgress(): QuizProgress | null {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return data ? JSON.parse(data) : null;
  }
  return null;
}

export function clearProgress(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  }
}

// Resultados do Quiz
export function saveResult(result: QuizResult): void {
  if (typeof window !== 'undefined') {
    const results = getResults();
    results.push(result);
    localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(results));
  }
}

export function getResults(): QuizResult[] {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.RESULTS);
    return data ? JSON.parse(data) : [];
  }
  return [];
}

export function getLatestResult(): QuizResult | null {
  const results = getResults();
  return results.length > 0 ? results[results.length - 1] : null;
}

// Configurações
export function saveSettings(settings: Partial<AppSettings>): void {
  if (typeof window !== 'undefined') {
    const current = getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
  }
}

export function getSettings(): AppSettings {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return data ? JSON.parse(data) : {
      theme: 'auto',
      hasCompletedQuiz: false,
      paymentStatus: 'pending',
    };
  }
  return {
    theme: 'auto',
    hasCompletedQuiz: false,
    paymentStatus: 'pending',
  };
}

// Exportar respostas em JSON
export function exportAnswersJSON(result: QuizResult): void {
  const dataStr = JSON.stringify(result, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `quiz-maturidade-${result.userName}-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}
