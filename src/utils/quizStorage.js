// Simple helper to persist quizComplete for configurable days (default 15)
const KEY = 'quizComplete';
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function _safeSet(storage, key, value) {
  try {
    storage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

function _safeGet(storage, key) {
  try {
    return storage.getItem(key);
  } catch (e) {
    return null;
  }
}

export function setQuizComplete(obj, days = 15) {
  const payload = {
    value: obj,
    expiresAt: Date.now() + days * MS_PER_DAY
  };
  const str = JSON.stringify(payload);

  // Prefer localStorage for persistence across sessions
  if (typeof window !== 'undefined' && window.localStorage) {
    if (_safeSet(window.localStorage, KEY, str)) return;
  }

  // Fallback to sessionStorage
  if (typeof window !== 'undefined' && window.sessionStorage) {
    _safeSet(window.sessionStorage, KEY, str);
  }
}

export function getQuizComplete() {
  if (typeof window === 'undefined') return null;

  // Try localStorage first, then sessionStorage
  const raw = _safeGet(window.localStorage, KEY) || _safeGet(window.sessionStorage, KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);

    // If it's legacy (no expiresAt) but looks like the value object, migrate
    if (parsed && parsed.value !== undefined && parsed.expiresAt !== undefined) {
      if (Date.now() > parsed.expiresAt) {
        // expired -> clear both
        clearQuizComplete();
        return null;
      }
      return parsed.value;
    }

    // Legacy support: raw is the value object itself (no wrapper)
    if (parsed && parsed.quiz !== undefined) {
      // migrate to localStorage with expiresAt
      setQuizComplete(parsed, 15);
      return parsed;
    }
  } catch (e) {
    // Could not parse JSON, clear corrupt entries
    try { window.localStorage.removeItem(KEY); } catch (e) {}
    try { window.sessionStorage.removeItem(KEY); } catch (e) {}
    return null;
  }

  return null;
}

export function clearQuizComplete() {
  if (typeof window === 'undefined') return;
  try { window.localStorage.removeItem(KEY); } catch (e) {}
  try { window.sessionStorage.removeItem(KEY); } catch (e) {}
}

export default {
  setQuizComplete,
  getQuizComplete,
  clearQuizComplete
};
