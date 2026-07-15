import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('info');

  // Scholarship Simulator state
  const [gpa, setGpa] = useState(8.5);
  const [familyIncome, setFamilyIncome] = useState('media'); // baja, media, alta

  // Vocational Test state
  const [answers, setAnswers] = useState({
    programming: '',
    problems: '',
    techInterest: '',
    innovation: ''
  });
  const [testResult, setTestResult] = useState(null);

  // Calculate scholarship estimation
  const calculateScholarship = () => {
    let baseDiscount = 0;
    
    // Academic scholarship based on GPA (promedio de bachillerato)
    if (gpa >= 9.5) {
      baseDiscount = 35;
    } else if (gpa >= 9.0) {
      baseDiscount = 25;
    } else if (gpa >= 8.0) {
      baseDiscount = 15;
    } else if (gpa >= 7.5) {
      baseDiscount = 10;
    }

    // Socio-economic factor
    if (familyIncome === 'baja') {
      baseDiscount += 10;
    } else if (familyIncome === 'media') {
      baseDiscount += 5;
    }

    // Cap scholarship at 50%
    return Math.min(baseDiscount, 50);
  };

  // Base tuition details
  const baseTuition = 1600; // Estimated semester cost in USD
  const scholarshipPct = calculateScholarship();
  const estimatedCost = baseTuition - (baseTuition * scholarshipPct) / 100;

  // Handle vocational test submission
  const handleTestSubmit = (e) => {
    e.preventDefault();
    if (!answers.programming || !answers.problems || !answers.techInterest || !answers.innovation) {
      alert('Por favor responde a todas las preguntas del test.');
      return;
    }

    let score = 0;
    if (answers.programming === 'si') score += 25;
    if (answers.problems === 'si') score += 25;
    if (answers.techInterest === 'si') score += 25;
    if (answers.innovation === 'si') score += 25;

    setTestResult(score);
  };

  // Curriculum areas data
  const studyAreas = [
    {
      semesters: 'Semestres 1 a 3',
      title: '💻 Fundamentos y Programación',
      desc: 'Aprende los lenguajes de programación clave, lógica de sistemas, estructuras de datos y desarrollo web inicial.'
    },
    {
      semesters: 'Semestres 4 a 5',
      title: '📱 Aplicaciones Móviles y Cloud',
      desc: 'Diseña aplicaciones modernas para teléfonos inteligentes y despliega proyectos dinámicos en servidores de internet.'
    },
    {
      semesters: 'Semestres 6 a 7',
      title: '🔒 Ciberseguridad y Redes',
      desc: 'Protege la información de las organizaciones, configura infraestructuras de red seguras y previene ataques cibernéticos.'
    },
    {
      semesters: 'Semestre 8',
      title: '🤖 Inteligencia Artificial e Innovación',
      desc: 'Explora redes neuronales, automatización de procesos, Big Data y crea tu proyecto de titulación tecnológica.'
    }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <svg style={{ width: 36, height: 36, color: 'var(--primary)' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <div>
            <span className="logo-text-title">UIDE Sede Loja</span>
            <span className="logo-text-subtitle">Tecnologías de la Información</span>
          </div>
        </div>
        <span className="tag-campus">Campus Loja</span>
      </header>

      {/* Hero card */}
      <section className="hero-card">
        <span className="hero-tag">Carrera de Sistemas / TICs</span>
        <h1 className="hero-title">Construye el Futuro con Tecnología</h1>
        <p className="hero-description">
          Bienvenido al portal interactivo de la carrera de Tecnologías de la Información en la Universidad Internacional del Ecuador. Conoce nuestra oferta académica, calcula tus becas y evalúa tu perfil tecnológico.
        </p>
      </section>

      {/* Navigation tabs */}
      <nav className="tabs">
        <button 
          className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          🎓 Conoce la Carrera
        </button>
        <button 
          className={`tab-button ${activeTab === 'beca' ? 'active' : ''}`}
          onClick={() => setActiveTab('beca')}
        >
          💰 Simulador de Becas
        </button>
        <button 
          className={`tab-button ${activeTab === 'test' ? 'active' : ''}`}
          onClick={() => setActiveTab('test')}
        >
          📋 Test Vocacional
        </button>
        <button 
          className={`tab-button ${activeTab === 'materias' ? 'active' : ''}`}
          onClick={() => setActiveTab('materias')}
        >
          📚 ¿Qué aprenderás?
        </button>
      </nav>

      {/* Tab 1: Info General */}
      {activeTab === 'info' && (
        <div className="content-card">
          <h2 className="section-title">Ingeniería en Sistemas de Información</h2>
          <p className="section-intro">
            Estudia en una modalidad presencial con el respaldo académico internacional de la UIDE. Prepárate para dar respuesta a la revolución digital.
          </p>

          <div className="grid-2">
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '700' }}>🎓 Datos de la Carrera</h3>
              <p style={{ marginBottom: '1rem' }}>
                • <strong>Título:</strong> Ingeniero/a en Sistemas de Información.<br />
                • <strong>Duración:</strong> 8 Semestres (4 años).<br />
                • <strong>Modalidad:</strong> Presencial en Loja.<br />
                • <strong>Enfoque:</strong> Desarrollo de software, innovación cloud y ciberseguridad.
              </p>

              <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '700' }}>📍 Ubicación y Contacto</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                📍 Calle Agustín Carrión Palacios entre Av. Salvador Bustamante Celi y Beethoven, Sector Jipiro (Loja).<br />
                📞 <strong>Admisiones:</strong> 095 970 0248 / 07-2612419.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '0.75rem', color: 'var(--primary)', fontWeight: '700' }}>✨ ¿Por qué elegir la UIDE?</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                • <strong>Prácticas Reales:</strong> Acceso a laboratorios de última generación para diseño de redes y bases de datos.<br />
                • <strong>Malla Moderna:</strong> Adaptada a los estándares de la industria tecnológica internacional (inteligencia artificial, cloud computing y desarrollo móvil).<br />
                • <strong>Convenios:</strong> Oportunidad de certificaciones y programas de intercambio estudiantil global.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Simulador de Becas */}
      {activeTab === 'beca' && (
        <div className="content-card">
          <h2 className="section-title">Simulador de Beca UIDE</h2>
          <p className="section-intro">
            Obtén un estimado del porcentaje de descuento en tu matrícula mensual y semestral según tu desempeño académico de bachillerato.
          </p>

          <div className="grid-2">
            <div>
              <div className="form-group">
                <label className="form-label" htmlFor="gpa-input">
                  Promedio de Bachillerato (7.00 - 10.00):
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="7" 
                    max="10" 
                    step="0.1"
                    value={gpa}
                    onChange={(e) => setGpa(parseFloat(e.target.value))}
                    className="form-input"
                    style={{ padding: '0', cursor: 'pointer', flex: 1, accentColor: 'var(--primary)' }}
                    id="gpa-range"
                  />
                  <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', width: '60px', textAlign: 'right' }}>
                    {gpa.toFixed(1)}
                  </span>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label className="form-label">Condición Socioeconómica Familiar:</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {['alta', 'media', 'baja'].map((income) => (
                    <button
                      key={income}
                      type="button"
                      style={{
                        flex: 1,
                        padding: '0.65rem',
                        border: '2px solid var(--border)',
                        borderRadius: '6px',
                        background: familyIncome === income ? 'var(--primary)' : '#ffffff',
                        color: familyIncome === income ? '#ffffff' : 'var(--text-main)',
                        fontWeight: '700',
                        cursor: 'pointer',
                        textTransform: 'capitalize'
                      }}
                      onClick={() => setFamilyIncome(income)}
                    >
                      {income}
                    </button>
                  ))}
                </div>
              </div>

              <div className="info-banner">
                Los valores aquí simulados son estimaciones referenciales de apoyo financiero y no constituyen un contrato. Sujetos a validación por el departamento de admisiones.
              </div>
            </div>

            <div>
              <div className="result-box">
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: '700' }}>Beca Estimada Sugerida</h3>
                <div className="result-percentage">{scholarshipPct}%</div>
                <div className="result-text" style={{ marginBottom: '1.5rem' }}>Descuento en Aranceles</div>
                
                <hr style={{ border: 'none', borderTop: '1px solid #bbf7d0', margin: '1rem 0' }} />
                
                <div style={{ fontSize: '1rem', color: '#166534' }}>
                  Costo de Semestre Estimado:<br />
                  <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', fontWeight: '800' }}>
                    ${estimatedCost.toFixed(0)} USD
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
                    Costo normal sin beca: ${baseTuition} USD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Test Vocacional Express */}
      {activeTab === 'test' && (
        <div className="content-card">
          <h2 className="section-title">Test Vocacional Express</h2>
          <p className="section-intro">
            Responde estas sencillas preguntas para saber si tu perfil se alinea con la Ingeniería en Sistemas y TICs de la UIDE.
          </p>

          <form onSubmit={handleTestSubmit}>
            <div className="quiz-question">
              <span className="form-label">1. ¿Te llama la atención saber cómo funcionan los programas, videojuegos o las aplicaciones móviles por dentro?</span>
              <div className="quiz-options">
                <label className={`quiz-option-label ${answers.programming === 'si' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="si" 
                    checked={answers.programming === 'si'}
                    onChange={() => setAnswers({...answers, programming: 'si'})}
                  />
                  <span>Sí, me despierta mucha curiosidad e interés.</span>
                </label>
                <label className={`quiz-option-label ${answers.programming === 'no' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q1" 
                    value="no"
                    checked={answers.programming === 'no'}
                    onChange={() => setAnswers({...answers, programming: 'no'})}
                  />
                  <span>No, prefiero solo utilizarlas sin preocuparme por su código.</span>
                </label>
              </div>
            </div>

            <div className="quiz-question">
              <span className="form-label">2. Al enfrentarte a un problema lógico o un rompecabezas matemático, ¿te diviertes buscando la mejor solución?</span>
              <div className="quiz-options">
                <label className={`quiz-option-label ${answers.problems === 'si' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="si" 
                    checked={answers.problems === 'si'}
                    onChange={() => setAnswers({...answers, problems: 'si'})}
                  />
                  <span>Sí, me gustan los retos lógicos y encontrar soluciones analíticas.</span>
                </label>
                <label className={`quiz-option-label ${answers.problems === 'no' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q2" 
                    value="no"
                    checked={answers.problems === 'no'}
                    onChange={() => setAnswers({...answers, problems: 'no'})}
                  />
                  <span>No, prefiero tareas más descriptivas o de otro tipo de análisis.</span>
                </label>
              </div>
            </div>

            <div className="quiz-question">
              <span className="form-label">3. ¿Te gusta estar al día con las últimas noticias sobre inteligencia artificial, computación o avances del internet?</span>
              <div className="quiz-options">
                <label className={`quiz-option-label ${answers.techInterest === 'si' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="si" 
                    checked={answers.techInterest === 'si'}
                    onChange={() => setAnswers({...answers, techInterest: 'si'})}
                  />
                  <span>Sí, sigo de cerca noticias de tecnología y automatización.</span>
                </label>
                <label className={`quiz-option-label ${answers.techInterest === 'no' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q3" 
                    value="no"
                    checked={answers.techInterest === 'no'}
                    onChange={() => setAnswers({...answers, techInterest: 'no'})}
                  />
                  <span>No especialmente, me interesan más otras temáticas.</span>
                </label>
              </div>
            </div>

            <div className="quiz-question">
              <span className="form-label">4. ¿Te gustaría diseñar sistemas para automatizar y mejorar los procesos de negocios o industrias?</span>
              <div className="quiz-options">
                <label className={`quiz-option-label ${answers.innovation === 'si' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q4" 
                    value="si" 
                    checked={answers.innovation === 'si'}
                    onChange={() => setAnswers({...answers, innovation: 'si'})}
                  />
                  <span>Sí, me entusiasma la idea de usar tecnología para hacer la vida más fácil.</span>
                </label>
                <label className={`quiz-option-label ${answers.innovation === 'no' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="q4" 
                    value="no"
                    checked={answers.innovation === 'no'}
                    onChange={() => setAnswers({...answers, innovation: 'no'})}
                  />
                  <span>No, prefiero enfocarme en la administración o las finanzas sin lo tecnológico.</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                background: 'var(--primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '1.5rem'
              }}
            >
              Verificar Resultados
            </button>
          </form>

          {testResult !== null && (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '2px solid var(--primary)',
              background: testResult >= 75 ? '#eff6ff' : '#f8fafc',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                Tu afinidad tecnológica es del {testResult}%
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                {testResult >= 75 ? (
                  <strong>🎉 ¡Excelente perfil! Tienes una alta afinidad con el desarrollo de software y las TICs. La carrera de Sistemas de Información en la UIDE Loja es la opción perfecta para potenciar tu creatividad e ingenio.</strong>
                ) : testResult >= 50 ? (
                  <strong>👍 Tienes un perfil balanceado. La informática y la resolución de problemas lógicos te atraen. Sería una gran oportunidad para aprender bases sólidas y convertirte en programador.</strong>
                ) : (
                  <strong>Puedes desarrollar habilidades tecnológicas durante la carrera si te propones aprender desde cero. ¡En la UIDE te enseñamos desde las bases fundamentales!</strong>
                )}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Materias */}
      {activeTab === 'materias' && (
        <div className="content-card">
          <h2 className="section-title">Estructura del Aprendizaje</h2>
          <p className="section-intro">
            A lo largo de los 8 semestres de estudio, adquirirás competencias prácticas organizadas en estas grandes áreas de estudio:
          </p>

          <div className="curriculum-grid">
            {studyAreas.map((area, idx) => (
              <div key={idx} className="curriculum-item">
                <div className="curriculum-semesters">{area.semesters}</div>
                <h3 className="curriculum-title">{area.title}</h3>
                <p className="curriculum-desc">{area.desc}</p>
              </div>
            ))}
          </div>

          <div className="info-banner" style={{ marginTop: '2rem' }}>
            🎓 <strong>Nota sobre laboratorios y proyectos:</strong> En cada bloque de estudios realizarás proyectos integradores donde pondrás en práctica tus conocimientos en servidores reales de prueba, bases de datos remotas y despliegues estáticos.
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Universidad Internacional del Ecuador - Sede Loja. Carrera de Sistemas de Información / TICs.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
          Calle Agustín Carrión Palacios entre Av. Salvador Bustamante Celi y Beethoven, Sector Jipiro.
        </p>
      </footer>
    </div>
  );
}
