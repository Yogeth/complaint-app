
export async function postComplaint({ name, email, issues, message }) {
  const params = new URLSearchParams({ name, email, issues, message });
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/postComplaint?${params}`, {
    method: "POST",
  });
  const text = await res.text();
  if (!res.ok) throw new Error(text || "Server error");
  return text;
}

export async function fetchComplaints() {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/viewComplaints`);
  if (!res.ok) throw new Error("Failed to fetch complaints");
  return res.json();
}
