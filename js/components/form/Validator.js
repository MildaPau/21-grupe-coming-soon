class Validator {
    isValidName(name) {
        if (typeof name !== 'string' ||
            name === '' ||
            name.trim() === '') {
            return 'Vardas negali buti tuscias tekstas.';
        }

        // tik vienas zodis (t.y. nera tarpu)
        // tik abeceles raides
        // pirma raide didzioji, kitos mazosios

        return true;
    }

    isValidEmail(email) {
        // READ MORE: https://en.wikipedia.org/wiki/Email_address
        if (typeof email !== 'string' ||
            email === '' ||
            email.trim() === '') {
            return 'Email negali buti tuscias tekstas.';
        }

        // turi buti tik vienas @ simbolis
        // aplink @ turi buti ne tusti tekstai

        return true;
    }

    isValidText(text) {
        if (typeof text !== 'string' ||
            text === '' ||
            text.trim() === '') {
            return 'Text negali buti tuscias tekstas.';
        }
        return true;
    }
}

export { Validator }