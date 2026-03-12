create table if not exists public.saved_looks (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  gender text not null,
  occasion text not null,
  look_number integer not null,
  items jsonb not null,
  created_at timestamptz default now()
);

alter table public.saved_looks enable row level security;

create policy "Allow anonymous inserts" on public.saved_looks
  for insert with check (true);

create policy "Allow anonymous reads" on public.saved_looks
  for select using (true);
