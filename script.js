/* ================================================================
   KAWAII LOVE — script.js
   Interatividade completa: carta, partículas, galeria, contador,
   linha do tempo, cartinhas, parallax e fundo animado.
================================================================ */

'use strict';

/* ── 1. CONFIGURAÇÃO PESSOAL ─────────────────────────────────────
   ↓ Edite aqui para personalizar o site ↓
────────────────────────────────────────────────────────────────── */
const CONFIG = {
  // Data de início do relacionamento (ano, mês-1, dia)
  startDate: new Date(2025, 9, 22), // 12 de junho de 2023

  // Fotos da galeria — troque os URLs pelos seus
  photos: [
    {
      src: 'https://cdn.discordapp.com/attachments/1034096344530432083/1514797360926953552/image.png?ex=6a2cac7a&is=6a2b5afa&hm=5eafc86e90868d921104d8a547504dae3e2870b1ec5fd9786b5a5f05af42e3a0&',
      title: '💕 O dia que a gente ficou se admirando',
      desc: 'Esse dia não tem como esquecerkk Eu lembro como se fosse ontem! A gente ainda tava bem no início, eu lembro desse sorriso e esse seus olhinhos fofinhos olhando para mim, nossa..Sério eu não consigo nem imaginar que encontrei uma garota tão fofa e linda como você.💕'
    },
    {
      src: 'https://media.discordapp.net/attachments/1034096344530432083/1514794181627744557/Screenshot_2025-09-28-19-40-19-034_com.whatsapp.jpg?ex=6a2ca984&is=6a2b5804&hm=039fbfe920ac55e9e8dac0913ab3fd6f09236587a901dfe40775649b1e48191b&=&format=webp&width=1752&height=789',
      title: '🎸 A gente tocando Violão!',
      desc: 'Esse dia foi bem marcante para mim, não dá para esquecer esse dia!! A gente ficou tocando juntos, até tocamos uma música do Metallica, lembra? Eu amei e quero tocar mais com você, sabia? :>'
    },
    {
      src: 'https://media.discordapp.net/attachments/1034096344530432083/1514792217032790098/Screenshot_37.png?ex=6a2ca7b0&is=6a2b5630&hm=52d163c705463b058063b915a3cbe9d0a07b26f8782f248707bc6864967aac5a&=&format=webp&quality=lossless&width=751&height=846',
      title: ' 💝 Bem no comecinho!',
      desc: 'Sei que talvez possa parecer uma foto aleatória, mas essa foto foi a minha favorita por muito tempo. Desde o comecinho do nosso namoro, eu lembro que ficava entrando na galeria só para admirar essa foto em específico. Eu amava ver você, kk. Lembro que, nessa foto em especial, você ficou assim de forma natural, e você ficou tão linda. Você sempre tá linda, hehe.'
    },
    {
      src: 'https://media.discordapp.net/attachments/1034096344530432083/1514792216655040532/Screenshot_2025-09-27-20-37-15-304_com.discord.jpg?ex=6a2ca7af&is=6a2b562f&hm=5aa176149912f60b2d37774124b256402aab54355ded19311c06702f6dff13b2&=&format=webp&width=1752&height=789',
      title: '💤 Nossas calls dormindo desde o início!',
      desc: 'AAAAAA, quando a gente começou a dormir juntinhos no início, sempre foi tão bom. Sabe, eu adoro dormir em call com você, É CLARO quando deixa o celular carregando! Mas ESSE dia foi o começo de tudo, e eu amei tanto. Eu não mudaria nada do que a gente passou até hoje!'
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1034096344530432083/1514792215354802197/IMG-20260502-WA0135.jpg?ex=6a2ca7af&is=6a2b562f&hm=7683f76b29807163bc35caa683c96a39f3e7e9150ac55afedad172424eb9af29&',
      title: '💌 A sua cartinha! Lembra?',
      desc: 'Não ache que eu não lembrei dela. Claro, todas as cartinhas que você mandou eu amo, mas essa aqui foi a que eu mais gostei, porque eu adoro quando você faz coisas criativas para mim. E sabe, eu sinto que não dei a devida atenção, porque essa foi a melhor coisa de todas!'
    },
        {
      src: 'https://media.discordapp.net/attachments/1034096344530432083/1514792625574772746/IMG_20250819_183447.jpg?ex=6a2ca811&is=6a2b5691&hm=8fe2adb3ba626e453977747219f8fc8333dd6838e145ef39e50ffd42adaac08e&=&format=webp&width=1035&height=960',
      title: '🌟 Meu primeiro desenho!',
      desc: 'Sabe, apesar de ser apenas um desenho, ele foi muito, muito importante para mim e continua sendo até hoje. Eu lembro de quando ainda éramos apenas amigos, e mesmo naquela época ele já tinha um significado enorme para mim.'
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1034096344530432083/1514837221482430605/AP1GczNrMprsvgc3hE3OalxTZzyPY1T9gbUF7elaZiyCkAmeCnDY0Z336FhAWww1600-h900-s-no-gm.png?ex=6a2cd199&is=6a2b8019&hm=90d9709d80dc79c35005caf936d4203325563dc6496c8718c203900cfe2c2aab&',
      title: '🎉 Festival do Evento de Heartopia',
      desc: 'Hahah! Nossa, essa foi a última foto que a gente tirou no Heartopia. Sabe, era muito legal jogar com você. Por algum momento, eu me sentia mais conectado nesse mundo. Subir de level juntos, passear juntos... sempre foi muito, muito divertido! Então isso é algo bem especial para mim. Essa é a minha foto favorita desse momento. Obrigado, amor, por tolerar minha ansiedade nesse joguinho, kksksks. Mas depois a gente joga mais, hein?'
    },
    {
      src: 'https://media.discordapp.net/attachments/1034096344530432083/1514794182487707748/Guitarra_e_palavras_de_amor.png?ex=6a2ca984&is=6a2b5804&hm=869f8f192cadd468b4f41389c5fd788676352e29cab81c0679fe3b23c5358273&=&format=webp&quality=lossless&width=563&height=846',
      title: '📕 O meu primeiro poema',
      desc: 'O meu primeiro poema, olha... Devo admitir que esse poema foi difícil de fazer, kk, porque eu não sei fazer poemas, kk. Mas eu sei o quão importantes eles são para você, e eu não deixaria de fazer um para você, meu bem. Fiz com todo o carinho do mundo, porque eu te amo.💗'
    },
  ],


  // Motivos para amar
  reasons: [
    { icon: '😊', text: 'Sua presença sempre me acalma, cada dia que se pasa me faz repensar como encontrei uma mulher tão perfeita para mim.' },
    { icon: '🤗', text: 'A minha super namorada! É ótima de ficar do meu lado não importa oque seja, sempre posso contar com ela💝' },
    { icon: '💕', text: 'Seu jeito carinhoso sempre é tão fofo e meigo, minha gatona fofucha!' },
    { icon: '💪', text: 'Você é tão forte. Consegue passar por tudo o que passou de forma tão firme. Saiba que eu sempre me orgulhei de quem você é. Mesmo quando está errada, você aprende com os seus erros e evita cometê-los novamente. Isso é lindo!' },
    { icon: '🎶', text: 'Os seus hobbies. O fato de você tocar guitarra e ver você solando aqueles solos incríveis me deixa impressionado. Você é muito talentosa, sempre foi!' },
    { icon: '😇', text: 'Sua paciência. Você sempre foi muito paciente e tolerou muitos erros meus, e eu fico grato por tudo isso. Sei que erro e vou melhorar, por isso, obrigado, amor!' },
    { icon: '💓', text: 'Você é linda, perfeita, maravilhosa, encantadora, deslumbrante, belíssima, radiante, incrível, charmosa, elegante, adorável, fascinante, esplêndida, magnífica, cativante, divina, graciosa, deslumbrante, formosa, espetacular, extraordinária, sublime, angelical, preciosa, irresistível, estonteante, maravilhosa.' },
    { icon: '💞', text: 'Obrigado por ser do jeito que você sempre foi, anjinha. Você é perfeita para mim. Eu amo cada detalhe seu, desde as pequenas coisas até as maiores. Amo o seu jeito de pensar, de falar, de agir e de demonstrar carinho. Você tornou os meus dias muito mais felizes e especiais só por existir neles. Obrigado 😇' }
  ],

  // Linha do tempo
  timeline: [
    {
      date: 'Junho 2025',
      title: '💌 Nosso Primeiro Contato',
      desc: 'Ainda eramos amigos, foi quando o Matheus te apresentou, lembra?',
      emoji: '💌'
    },
    {
      date: 'Agosto 2025',
      title: '🤗 Estavamos começando se aproximar.',
      desc: 'Depois de eu passar por uma fase ruim você me acolheu então começamos a se aproximar.',
      emoji: '🤗'
    },
    {
      date: 'Setembro 2025',
      title: '💕 O Primeiro "Eu te amo"',
      desc: 'Você sabe, nesse mesmo dia..',
      emoji: '💕'
    },
    {
      date: '22 De Setembro 2025',
      title: '💌',
      desc: 'O dia em que te pedi em namoro foi um dos mais importantes da minha vida. Eu não sabia se daria certo, mas deu muito mais certo do que eu imaginava. ❤️',
      emoji: '💌'
    },
    {
      date: 'Junho 2026',
      title: '🌸 Hoje e Sempre!',
      desc: 'Cada dia ao seu lado é uma nova razão para sorrir. Você transforma até os momentos mais simples em lembranças especiais, e faz meus dias serem muito mais felizes.',
      emoji: '🌸'
    }
  ],

  // Cartinhas interativas
  miniCards: [
    { icon: '🦔', label: 'Ei...', msg: 'Você... conhece o sonic o ouriço? Nos anos 90, dois desenhos do Sonic passavam ao mesmo tempo: um sério e outro mais engraçado, acredita?' },
    { icon: '🧛‍♀️', label: 'Meu amor', msg: 'Em todas as vidas e em todos os universos, eu ainda escolheria você. Assim como Stefan escolheu Helena, eu escolho você.' },
    { icon: '👱‍♀️', label: 'Entre o seus cabelos', msg: ' Assim como Rapunzel e Flynn Rider, minha aventura favorita é viver cada momento ao seu lado. ❤️' },
    { icon: '💻', label: 'Mesmo online..', msg: 'Mesmo quando a distância nos separa, meu coração sempre encontra um jeito de ficar ao seu lado. Não importa onde eu esteja!' },
    { icon: '💪', label: '3..2..1 Let it rip! ', msg: 'Assim como um Blader nunca abandona seu Bey, eu nunca vou deixar de escolher você!' },
    { icon: '🍓🎶', label: 'Seu jeito.', msg: 'Eu amo quando a gente toca juntos. Esses momentos ao seu lado sempre se tornam uma das melhores partes do meu dia.' }
  ]
};

/* ================================================================
   2. FUNDO ANIMADO
================================================================ */
const BG_ELEMENTS = ['💕','🌸','⭐','🎀','💖','✨','🌷','💗','🍀','💝','🌟','🎀'];

function spawnBgFloat () {
  const canvas = document.getElementById('bg-canvas');
  const el = document.createElement('span');
  el.className = 'bg-float';
  el.textContent = BG_ELEMENTS[Math.floor(Math.random() * BG_ELEMENTS.length)];
  el.style.left     = Math.random() * 100 + 'vw';
  el.style.fontSize = (Math.random() * 18 + 10) + 'px';
  const dur  = Math.random() * 12 + 10;
  const del  = Math.random() * 6;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay   = del + 's';
  canvas.appendChild(el);

  // Remove após o ciclo para não vazar memória
  setTimeout(() => el.remove(), (dur + del) * 1000 + 200);
}

// Gera elementos continuamente
function startBgAnimation () {
  spawnBgFloat();
  setInterval(spawnBgFloat, 600);
}

/* ================================================================
   3. CONTADOR DE TEMPO JUNTOS
================================================================ */
function updateCounter () {
  const now   = new Date();
  const diff  = now - CONFIG.startDate; // ms

  const secs  = Math.floor(diff / 1000);
  const mins  = Math.floor(secs  / 60);
  const hours = Math.floor(mins  / 60);
  const days  = Math.floor(hours / 24);

  const pad = (n, l = 2) => String(n).padStart(l, '0');

  document.getElementById('c-days').textContent  = pad(days, 3);
  document.getElementById('c-hours').textContent = pad(hours % 24);
  document.getElementById('c-mins').textContent  = pad(mins  % 60);
  document.getElementById('c-secs').textContent  = pad(secs  % 60);
}

/* ================================================================
   4. GALERIA
================================================================ */
let currentPhotoIndex = 0;

function buildGallery () {
  const grid = document.getElementById('gallery-grid');

  CONFIG.photos.forEach((photo, i) => {
    const card = document.createElement('div');
    card.className = 'gallery-card reveal';
    card.innerHTML = `
      <div class="gallery-img-wrap">
        <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
      </div>
      <p class="gallery-caption">${photo.title}</p>
    `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
}

/* Modal */
function openModal (index) {
  currentPhotoIndex = index;
  renderModal();
  const modal = document.getElementById('photo-modal');
  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function renderModal () {
  const photo = CONFIG.photos[currentPhotoIndex];
  document.getElementById('modal-img').src   = photo.src;
  document.getElementById('modal-img').alt   = photo.title;
  document.getElementById('modal-title').textContent = photo.title;
  document.getElementById('modal-desc').textContent  = photo.desc;
  document.getElementById('modal-counter').textContent =
    `${currentPhotoIndex + 1} / ${CONFIG.photos.length}`;
}

function closeModal () {
  const modal = document.getElementById('photo-modal');
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal () {
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', closeModal);

  document.getElementById('modal-prev').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
    renderModal();
  });

  document.getElementById('modal-next').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.photos.length;
    renderModal();
  });

  // Teclado
  document.addEventListener('keydown', e => {
    const modal = document.getElementById('photo-modal');
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft')  document.getElementById('modal-prev').click();
    if (e.key === 'ArrowRight') document.getElementById('modal-next').click();
  });
}

/* ================================================================
   5. MOTIVOS
================================================================ */
function buildReasons () {
  const grid = document.getElementById('reasons-grid');
  CONFIG.reasons.forEach(r => {
    const card = document.createElement('div');
    card.className = 'reason-card reveal';
    card.innerHTML = `
      <span class="reason-icon">${r.icon}</span>
      <p class="reason-text">${r.text}</p>
    `;
    grid.appendChild(card);
  });
}

/* ================================================================
   6. LINHA DO TEMPO
================================================================ */
function buildTimeline () {
  const tl = document.getElementById('timeline');
  CONFIG.timeline.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item reveal';
    el.innerHTML = `
      <div class="timeline-dot">${item.emoji}</div>
      <div class="timeline-content">
        <p class="timeline-date">${item.date}</p>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    tl.appendChild(el);
  });
}

/* ================================================================
   7. CARTINHAS INTERATIVAS
================================================================ */
function buildMiniCards () {
  const grid = document.getElementById('minicards-grid');
  CONFIG.miniCards.forEach(mc => {
    const card = document.createElement('div');
    card.className = 'minicard reveal';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Abrir cartinha: ${mc.label}`);
    card.innerHTML = `
      <div class="minicard-inner">
        <div class="minicard-face">
          <span class="minicard-icon">${mc.icon}</span>
          <span class="minicard-label">${mc.label}</span>
        </div>
        <div class="minicard-back">
          <p class="minicard-msg">${mc.msg}</p>
        </div>
      </div>
    `;
    const toggle = () => card.classList.toggle('flipped');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') toggle(); });
    grid.appendChild(card);
  });
}

/* ================================================================
   8. SCROLL REVEAL (Intersection Observer)
================================================================ */
function initReveal () {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ================================================================
   9. PARALLAX SUAVE
================================================================ */
function initParallax () {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('.parallax-layer').forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.3;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

/* ================================================================
   10. PARTÍCULAS / CONFETES (canvas)
================================================================ */
const ParticleSystem = (() => {
  const canvas  = document.getElementById('particle-canvas');
  const ctx     = canvas.getContext('2d');
  let particles = [];
  let running   = false;

  function resize () {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createExplosion (x, y, count = 120) {
    const EMOJIS = ['❤','💕','💖','💗','✨','🌸','💝','⭐','🎀'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 2;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 4,
        alpha: 1,
        scale: Math.random() * .8 + .5,
        decay: Math.random() * .012 + .008,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - .5) * 8,
        gravity: .15 + Math.random() * .1
      });
    }
    if (!running) loop();
  }

  // Confetes coloridos
  function createConfetti (count = 80) {
    const colors = ['#FF85B3','#FFD6E7','#F5C842','#FF4D88','#FFB3D1','#E8315A'];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -20,
        vx: (Math.random() - .5) * 4,
        vy: Math.random() * 3 + 1,
        alpha: 1,
        scale: Math.random() * .7 + .4,
        decay: Math.random() * .006 + .003,
        color: colors[Math.floor(Math.random() * colors.length)],
        w: Math.random() * 10 + 6,
        h: Math.random() * 5 + 3,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - .5) * 6,
        gravity: .08 + Math.random() * .05,
        type: 'rect'
      });
    }
    if (!running) loop();
  }

  function loop () {
    running = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => p.alpha > 0.02);

    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.scale(p.scale, p.scale);

      if (p.type === 'rect') {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.font = '20px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.emoji, 0, 0);
      }

      ctx.restore();

      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.99;
      p.alpha   -= p.decay;
      p.rotation += p.rotSpeed;
    });

    if (particles.length > 0) requestAnimationFrame(loop);
    else running = false;
  }

  window.addEventListener('resize', resize);
  resize();

  return { createExplosion, createConfetti };
})();

/* ================================================================
   11. ENVELOPE — lógica de abertura
================================================================ */
function initEnvelope () {
  const wrapper = document.getElementById('envelope-wrapper');
  const envelope = document.getElementById('envelope');
  const hint    = document.getElementById('envelope-hint');
  let opened    = false;

  function openEnvelope () {
    if (opened) return;
    opened = true;

    hint.style.display = 'none';
    envelope.classList.add('open');

    // Flash na tela
    const flash = document.createElement('div');
    flash.className = 'screen-flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 800);

    // Explosão de corações no centro
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    ParticleSystem.createExplosion(cx, cy, 140);

    // Confetes
    setTimeout(() => ParticleSystem.createConfetti(100), 300);
    setTimeout(() => ParticleSystem.createConfetti(80),  800);

    // Revelar conteúdo principal com delay
    setTimeout(revealMainContent, 1600);
  }

  wrapper.addEventListener('click', openEnvelope);
  wrapper.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') openEnvelope();
  });
}

/* ================================================================
   12. REVELAR CONTEÚDO PRINCIPAL
================================================================ */
function revealMainContent () {
  const hero = document.getElementById('hero');
  const main = document.getElementById('main-content');

  // Scrolla suavemente para baixo
  hero.style.minHeight = 'auto';

  main.classList.remove('hidden');
  main.classList.add('visible');
  main.setAttribute('aria-hidden', 'false');

  // Re-observa elementos reveal que acabaram de aparecer
  initReveal();

  // Scroll suave para o conteúdo
  setTimeout(() => {
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 300);
}

/* ================================================================
   13. MÚSICA (opcional — descomentar no HTML)
================================================================ */
/* function initMusic () {
  const btn   = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-music');
  if (!btn || !audio) return;
  let playing = false;
  btn.addEventListener('click', () => {
    playing = !playing;
    if (playing) { audio.play(); btn.textContent = '🎵'; }
    else         { audio.pause(); btn.textContent = '🔇'; }
  });
} */

/* ================================================================
   14. INICIALIZAÇÃO
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  startBgAnimation();
  buildGallery();
  buildReasons();
  buildTimeline();
  buildMiniCards();
  initEnvelope();
  initModal();
  initParallax();

  // Contador — atualiza a cada segundo
  updateCounter();
  setInterval(updateCounter, 1000);

  // Scroll reveal inicial (elementos já visíveis)
  setTimeout(initReveal, 100);

  // initMusic(); // Descomentar junto com o <audio> no HTML
});