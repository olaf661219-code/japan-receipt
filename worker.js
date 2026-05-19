export default {
  async fetch(req, env) {
    const h = {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'};
    if (req.method === 'OPTIONS') return new Response(null, {headers: h});
    const b = await req.json();
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {'Content-Type':'application/json','x-api-key':env.ANTHROPIC_KEY,'anthropic-version':'2023-06-01'},
      body: JSON.stringify(b)
    });
    return new Response(await r.text(), {headers: h});
  }
};
