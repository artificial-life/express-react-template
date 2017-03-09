export function random() {
  return fetch('/api/random').then(d => d.json())
}
