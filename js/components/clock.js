function clock(selector, deadline) {
    // validation
    if (typeof selector !== 'string' ||
        selector === '') {
        console.error('ERROR: netinkamo formato selectorius.');
        return false;
    }
    if (typeof deadline !== 'string' ||
        deadline === '') {
        console.error('ERROR: netinkamo formato deadlainas.');
        return false;
    }

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: pagal pateikta selectoriu elementas nerastas.');
        return false;
    }

    const numbers = {
        days: 432,
        hours: 9,
        minutes: 37,
        seconds: 39
    };
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';

    for (let i = 0; i < 4; i++) {
        const key = labels[i];
        HTML += `<div class="time">
                    <div class="value">${numbers[key]}</div>
                    <div class="label">${key}</div>
                </div>`;
    }

    // post logic validation

    // result
    DOM.innerHTML = HTML;

    setInterval(function () {
        updateClock(DOM, deadline);
    }, 1000);
}

function updateClock(DOM, deadline) {
    const date = new Date();

    let deadlineYear = date.getFullYear();
    let fullDeadline = `${deadlineYear}-${deadline}`;
    const deadlineInMiliseconds = (new Date(fullDeadline)).getTime();
    const now = Date.now();

    if (deadlineInMiliseconds < now) {
        deadlineYear++;
        fullDeadline = `${deadlineYear}-${deadline}`;
    }

    console.log(fullDeadline);
}

export { clock }