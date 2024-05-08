/*function animateSkillBar(barSelector, percentageSelector, percentage) {
    const fillBar = document.querySelector(barSelector);
    const percentageElement = document.querySelector('.porcentagem');

    fillBar.style.width = percentage;
    percentageElement.textContent = percentage;

    setTimeout(() => {
        fillBar.style.transition = 'width 1s ease-in-out';
        fillBar.style.width = percentage;
    }, 100);
}

animateSkillBar('.comunicacao .fill', '.comunicacao + .porcentagem', '80%');
animateSkillBar('.grupo .fill', '.grupo + .porcentagem', '100%');
animateSkillBar('.foco .fill', '.foco + .porcentagem', '50%');/*
