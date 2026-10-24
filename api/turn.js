// Hands out short-lived Cloudflare TURN credentials so players on strict networks can still connect directly.
// Needs the Vercel environment variables CF_TURN_KEY_ID and CF_TURN_API_TOKEN.
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const id = process.env.CF_TURN_KEY_ID, token = process.env.CF_TURN_API_TOKEN;
  if (!id || !token) return res.status(503).json({error: 'TURN is not configured'});
  try {
    const r = await fetch(`https://rtc.live.cloudflare.com/v1/turn/keys/${id}/credentials/generate-ice-servers`, {
      method: 'POST',
      headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
      body: JSON.stringify({ttl: 86400}),
    });
    if (!r.ok) return res.status(502).json({error: `Cloudflare answered ${r.status}`});
    const j = await r.json();
    res.status(200).json({iceServers: j.iceServers});
  } catch (e) {
    res.status(502).json({error: 'Cloudflare is unreachable'});
  }
};
