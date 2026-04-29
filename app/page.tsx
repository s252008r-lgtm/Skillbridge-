'use client';
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', college: '', year: '', interest: '', level: '' });
  const [submitted, setSubmitted] = useState(false);

  const interests = ['Web Development', 'App Development', 'Data Science', 'UI/UX Design', 'Digital Marketing'];
  const levels = [
    { val: 'beginner', emoji: '🌱', label: 'Beginner', sub: 'Abhi shuru kiya' },
    { val: 'intermediate', emoji: '🔥', label: 'Intermediate', sub: 'Thoda jaanta hun' },
    { val: 'advanced', emoji: '⚡', label: 'Advanced', sub: 'Kaafi experience hai' },
  ];

  return (
    <main style={{ fontFamily: 'sans-serif', background: '#f8fafc', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ background: '#0A2463', padding: '16px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: 'white', fontWeight: 800, fontSize: '1.4rem' }}>
          Skill<span style={{ color: '#60a5fa' }}>Bridge</span>
        </div>
        <a href="#waitlist" style={{ background: '#1a56db', color: 'white', padding: '8px 20px', borderRadius: '50px', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
          Join Waitlist 🚀
        </a>
      </nav>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0A2463, #1a56db)', padding: '80px 5%', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
          🎓 Students ke liye, Students ke saath
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
          Seekho. Banao.<br />
          <span style={{ color: '#93c5fd' }}>Aage Badho.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          India ka pehla platform jo students ko real projects se connect karta hai, AI roadmaps deta hai, aur earning ka mauka deta hai.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="#waitlist" style={{ background: 'white', color: '#1a56db', padding: '14px 28px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            🚀 Free Join Karo
          </a>
          <a href="#features" style={{ background: 'transparent', color: 'white', padding: '14px 28px', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem', border: '2px solid rgba(255,255,255,0.3)' }}>
            Kaise Kaam Karta Hai?
          </a>
        </div>
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[['10K+', 'Students Waiting'], ['500+', 'Projects Listed'], ['₹0', 'Start Karne Ki Cost']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 800 }}>{num}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEMS */}
      <section style={{ background: '#0A2463', padding: '60px 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Problem</div>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800 }}>Kya yeh problems feel karte ho? 😤</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            ['📜', 'Certificate Hai, Skill Nahi', '10 courses kiye, ek bhi real project nahi banaya.'],
            ['🔄', 'Internship Ka Chakkar', 'Experience chahiye internship ke liye, internship chahiye experience ke liye.'],
            ['🧭', 'Kya Seekhein, Kahan Se?', 'YouTube pe content bahut hai, guidance zero hai.'],
            ['🎭', 'Fake College Projects', 'Jo project banaya woh real nahi tha. Portfolio dikhane mein sharam aati hai.'],
          ].map(([emoji, title, desc]) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{emoji}</div>
              <h3 style={{ color: 'white', fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>{title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '60px 5%', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ color: '#1a56db', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Solution</div>
          <h2 style={{ color: '#0A2463', fontSize: '2rem', fontWeight: 800 }}>Teen problems, ek platform ✅</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            ['🗺️', 'Smart AI Roadmap', 'Apna goal daalo → AI tumhara personalized 6-month learning path banayega — bilkul free!', 'AI Powered'],
            ['💼', 'Real Project Marketplace', 'Businesses real problems post karte hain. Students solve karte hain. Portfolio banta hai + stipend milta hai.', '₹500–₹15,000'],
            ['🧑‍🏫', 'Peer Mentorship', '3rd/4th year seniors affordable mentors bante hain. ₹99/session se shuru.', 'Affordable'],
          ].map(([icon, title, desc, tag]) => (
            <div key={title} style={{ background: 'white', border: '1px solid #dbeafe', borderRadius: '20px', padding: '24px' }}>
              <div style={{ width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '16px' }}>{icon}</div>
              <h3 style={{ color: '#0A2463', fontWeight: 700, marginBottom: '8px' }}>{title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '12px' }}>{desc}</p>
              <span style={{ background: '#dbeafe', color: '#1a56db', fontSize: '0.72rem', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>{tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST FORM */}
      <section id="waitlist" style={{ background: 'linear-gradient(135deg, #0A2463, #1a56db)', padding: '60px 5%', textAlign: 'center' }}>
        <div style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Join Now</div>
        <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>Waitlist Join Karo 🚀</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>Pehle 1000 students ko FREE premium access milega!</p>

        <div style={{ background: 'white', borderRadius: '24px', padding: '32px', maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
          {!submitted ? (
            <>
              {/* Progress */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                {[1, 2, 3].map(s => (
                  <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: step >= s ? '#1a56db' : '#dbeafe', color: step >= s ? 'white' : '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem' }}>
                      {step > s ? '✓' : s}
                    </div>
                    <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{s === 1 ? 'Basic' : s === 2 ? 'College' : 'Skill'}</span>
                  </div>
                ))}
              </div>

              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h3 style={{ color: '#0A2463', fontWeight: 700, marginBottom: '16px' }}>Apna intro do! 👋</h3>
                  {[['Naam', 'name', 'Rahul Sharma', 'text'], ['Email', 'email', 'rahul@gmail.com', 'email']].map(([label, key, ph, type]) => (
                    <div key={key} style={{ marginBottom: '14px' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', display: 'block', marginBottom: '6px' }}>{label} *</label>
                      <input type={type} placeholder={ph} value={form[key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #dbeafe', borderRadius: '10px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  ))}
                  <button onClick={() => { if (form.name && form.email) setStep(2); }}
                    style={{ width: '100%', padding: '12px', background: '#1a56db', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', marginTop: '8px' }}>
                    Aage Badho →
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h3 style={{ color: '#0A2463', fontWeight: 700, marginBottom: '16px' }}>College details 🎓</h3>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', display: 'block', marginBottom: '6px' }}>College *</label>
                    <input placeholder="Delhi University, IIT, VIT..." value={form.college}
                      onChange={e => setForm({ ...form, college: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #dbeafe', borderRadius: '10px', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', display: 'block', marginBottom: '6px' }}>Year *</label>
                    <select value={form.year} onChange={e => setForm({ ...form, year: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #dbeafe', borderRadius: '10px', fontSize: '0.9rem', outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                      <option value="">Select karo</option>
                      {['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduated'].map(y => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                    <button onClick={() => setStep(1)} style={{ flex: 1, padding: '12px', background: 'white', color: '#64748b', border: '1.5px solid #dbeafe', borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}>← Wapas</button>
                    <button onClick={() => { if (form.college && form.year) setStep(3); }} style={{ flex: 2, padding: '12px', background: '#1a56db', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>Aage Badho →</button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h3 style={{ color: '#0A2463', fontWeight: 700, marginBottom: '16px' }}>Skill level? 💻</h3>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', display: 'block', marginBottom: '8px' }}>Interest *</label>
                  <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', border: '1.5px solid #dbeafe', borderRadius: '10px', fontSize: '0.9rem', outline: 'none', background: 'white', marginBottom: '14px', boxSizing: 'border-box' }}>
                    <option value="">Select karo</option>
                    {interests.map(i => <option key={i}>{i}</option>)}
                  </select>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e293b', display: 'block', marginBottom: '8px' }}>Level *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
                    {levels.map(l => (
                      <div key={l.val} onClick={() => setForm({ ...form, level: l.val })}
                        style={{ border: `2px solid ${form.level === l.val ? '#1a56db' : '#dbeafe'}`, background: form.level === l.val ? '#eff6ff' : '#f8fafc', borderRadius: '12px', padding: '12px 8px', textAlign: 'center', cursor: 'pointer' }}>
                        <div style={{ fontSize: '1.4rem' }}>{l.emoji}</div>
                        <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#0A2463' }}>{l.label}</div>
                        <div style={{ fontSize: '0.65rem', color: '#64748b' }}>{l.sub}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => setStep(2)} style={{ flex: 1, padding: '12px', background: 'white', color: '#64748b', border: '1.5px solid #dbeafe', borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}>← Wapas</button>
                    <button onClick={() => { if (form.interest && form.level) setSubmitted(true); }}
                      style={{ flex: 2, padding: '12px', background: '#1a56db', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>
                      🚀 Join Waitlist!
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
              <h3 style={{ color: '#0A2463', fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>Welcome, {form.name.split(' ')[0]}!</h3>
              <p style={{ color: '#64748b', marginBottom: '20px' }}>Tum waitlist pe ho! Launch pe sabse pehle tumhe email aayegi.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {['✅ Early Access', '✅ Free Roadmap', '✅ 40% Discount'].map(p => (
                  <span key={p} style={{ background: '#eff6ff', color: '#1a56db', padding: '6px 14px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 500 }}>{p}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0A2463', padding: '24px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem' }}>Skill<span style={{ color: '#60a5fa' }}>Bridge</span></div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>Padho. Seekho. Kamao. 🇮🇳</div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>© 2025 SkillBridge</div>
      </footer>

    </main>
  );
}
