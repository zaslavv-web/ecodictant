// profile.js
document.addEventListener('DOMContentLoaded', () => {
    // Получаем текущего пользователя из localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        showProfileScreen(currentUser);
        if (currentUser.role === 'curator') {
            showCuratorColumn(currentUser);
        }
    } else {
        window.location.href = 'index.html';
    }

    // Обработчики событий
    document.getElementById('edit-profile-btn').addEventListener('click', toggleEditProfile);
    document.getElementById('save-profile-btn').addEventListener('click', saveProfile);
    document.getElementById('change-password-btn').addEventListener('click', showChangePasswordModal);
    document.getElementById('save-new-password-btn').addEventListener('click', handleChangePassword);
    document.getElementById('profile-dashboard-close-btn').addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
    document.getElementById('change-password-modal-close-btn').addEventListener('click', () => closeModal('change-password-modal'));
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('change-password-modal');
        if (event.target === modal) {
            closeModal('change-password-modal');
        }
    });

    // Функции для работы с модальными окнами
    function showModal(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    function showChangePasswordModal() {
        showModal('change-password-modal');
    }

    // Функции для личного кабинета
    function showProfileScreen(user) {
        document.getElementById('profile-name').value = user.name || '';
        document.getElementById('profile-surname').value = user.surname || '';
        document.getElementById('profile-birthdate').value = user.birthdate || '';
        document.getElementById('profile-phone').value = user.phone || '';
        document.getElementById('profile-email').value = user.email || '';
        document.getElementById('profile-messenger').value = user.messenger || '';
    }

    function toggleEditProfile() {
        const fields = document.querySelectorAll('.profile-field');
        const editBtn = document.getElementById('edit-profile-btn');
        const saveBtn = document.getElementById('save-profile-btn');
        const isEditable = editBtn.style.display !== 'none';

        fields.forEach(field => {
            field.readOnly = !isEditable;
            if (isEditable) {
                field.classList.add('editable');
            } else {
                field.classList.remove('editable');
            }
        });

        if (isEditable) {
            editBtn.style.display = 'none';
            saveBtn.style.display = 'block';
        } else {
            editBtn.style.display = 'block';
            saveBtn.style.display = 'none';
        }
    }

    function saveProfile() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        user.name = document.getElementById('profile-name').value;
        user.surname = document.getElementById('profile-surname').value;
        user.birthdate = document.getElementById('profile-birthdate').value;
        user.phone = document.getElementById('profile-phone').value;
        user.email = document.getElementById('profile-email').value;
        user.messenger = document.getElementById('profile-messenger').value;

        let allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = allUsers.findIndex(u => u.email === user.email);
        if (userIndex !== -1) {
            allUsers[userIndex] = user;
            localStorage.setItem('users', JSON.stringify(allUsers));
        }

        localStorage.setItem('currentUser', JSON.stringify(user));

        toggleEditProfile();
        alert('Профиль сохранен!');
    }

    // Функция для проверки пароля на соответствие правилам
    function validatePassword(password) {
        const errors = [];
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLatinAndNumbers = /^[a-zA-Z0-9]+$/.test(password);

        if (password.length < minLength) {
            errors.push('Минимум 8 символов');
        }
        if (!hasUppercase) {
            errors.push('Минимум 1 заглавная буква');
        }
        if (!hasLowercase) {
            errors.push('Минимум 1 строчная буква');
        }
        if (!isLatinAndNumbers) {
            errors.push('Только латинские буквы и цифры');
        }
        return errors;
    }

    function handleChangePassword() {
        const oldPasswordInput = document.getElementById('old-password');
        const newPasswordInput = document.getElementById('new-password');
        const confirmNewPasswordInput = document.getElementById('confirm-new-password');

        const oldPasswordError = document.getElementById('old-password-error');
        const newPasswordError = document.getElementById('new-password-error');
        const confirmNewPasswordError = document.getElementById('confirm-new-password-error');

        oldPasswordError.textContent = '';
        newPasswordError.textContent = '';
        confirmNewPasswordError.textContent = '';

        const oldPassword = oldPasswordInput.value;
        const newPassword = newPasswordInput.value;
        const confirmNewPassword = confirmNewPasswordInput.value;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (oldPassword !== currentUser.password) {
            oldPasswordError.textContent = "Неверный текущий пароль.";
            return;
        }

        const passwordErrors = validatePassword(newPassword);
        if (passwordErrors.length > 0) {
            newPasswordError.textContent = passwordErrors.join(', ');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            confirmNewPasswordError.textContent = "Новые пароли не совпадают.";
            return;
        }

        // Обновляем пароль
        currentUser.password = newPassword;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        let allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            allUsers[userIndex].password = newPassword;
            localStorage.setItem('users', JSON.stringify(allUsers));
        }

        alert("Пароль успешно изменён.");
        closeModal('change-password-modal');
    }

    // Показ третьего столбца для кураторов
    function showCuratorColumn(user) {
        document.getElementById('curator-column').style.display = 'block';
        if (user.hasSecretCode) {
            document.getElementById('curator-materials').style.display = 'block';
            document.getElementById('curator-materials-title').textContent = translations[currentLanguage].curator_materials_title;
            document.getElementById('curator-platform-rules').textContent = translations[currentLanguage].curator_platform_rules;
            document.getElementById('curator-print-materials').textContent = translations[currentLanguage].curator_print_materials;
            document.getElementById('curator-distribution-materials').textContent = translations[currentLanguage].curator_distribution_materials;
            document.getElementById('curator-questions').textContent = translations[currentLanguage].curator_questions;
            document.getElementById('curator-answers').textContent = translations[currentLanguage].curator_answers;
            document.getElementById('curator-volunteer-rules').textContent = translations[currentLanguage].curator_volunteer_rules;
            document.getElementById('curator-certificate-participant').textContent = translations[currentLanguage].curator_certificate_participant;
            document.getElementById('curator-certificate-winner').textContent = translations[currentLanguage].curator_certificate_winner;
            document.getElementById('curator-certificate-success').textContent = translations[currentLanguage].curator_certificate_success;
            // Assume dummy links, in real - real URLs
            document.getElementById('curator-platform-rules').href = 'platform_rules.pdf';
            // ... similarly for others
        } else if (user.platformStatus === 'pending') {
            document.getElementById('curator-pending').style.display = 'block';
            document.getElementById('curator-pending-message').textContent = translations[currentLanguage].curator_pending_message;
        } else {
            document.getElementById('curator-platform-form').style.display = 'block';
            document.getElementById('curator-thanks').textContent = translations[currentLanguage].curator_thanks;
            document.getElementById('curator-platform-info').textContent = translations[currentLanguage].curator_platform_info;
            document.getElementById('curator-country').textContent = translations[currentLanguage].curator_country;
            document.getElementById('curator-city').textContent = translations[currentLanguage].curator_city;
            document.getElementById('curator-attendance').textContent = translations[currentLanguage].curator_attendance;
            document.getElementById('curator-volunteers').textContent = translations[currentLanguage].curator_volunteers;
            document.getElementById('curator-contact-person').textContent = translations[currentLanguage].curator_contact_person;
            document.getElementById('curator-contact-phone').textContent = translations[currentLanguage].curator_contact_phone;
            document.getElementById('curator-contact-email').textContent = translations[currentLanguage].curator_contact_email;
            document.getElementById('curator-contact-messenger').textContent = translations[currentLanguage].curator_contact_messenger;
            document.getElementById('curator-submit-platform').textContent = translations[currentLanguage].curator_submit_platform;
        }
    }

    // Обработчик формы площадки
    document.getElementById('platform-form').addEventListener('submit', handlePlatformSubmit);

    function handlePlatformSubmit(e) {
        e.preventDefault();

        let valid = true;
        const fields = ['country', 'city', 'attendance', 'volunteers', 'contact-person', 'contact-phone', 'contact-email', 'contact-messenger'];
        fields.forEach(field => {
            if (!document.getElementById(field).value) {
                document.getElementById(field + '-error').textContent = 'Обязательное поле';
                valid = false;
            }
        });

        if (!valid) return;

        let user = JSON.parse(localStorage.getItem('currentUser'));
        user.platformInfo = {
            country: document.getElementById('country').value,
            city: document.getElementById('city').value,
            attendance: document.getElementById('attendance').value,
            volunteers: document.getElementById('volunteers').value,
            contactPerson: document.getElementById('contact-person').value,
            contactPhone: document.getElementById('contact-phone').value,
            contactEmail: document.getElementById('contact-email').value,
            contactMessenger: document.getElementById('contact-messenger').value
        };
        user.platformStatus = 'pending';

        let allUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = allUsers.findIndex(u => u.email === user.email);
        if (userIndex !== -1) {
            allUsers[userIndex] = user;
            localStorage.setItem('users', JSON.stringify(allUsers));
        }

        localStorage.setItem('currentUser', JSON.stringify(user));

        // Симуляция отправки письма админу
        const letter = `
            Заявка от куратора: ${user.name} ${user.surname}
            Email: ${user.email}
            Страна: ${user.platformInfo.country}
            Город: ${user.platformInfo.city}
            Посещаемость: ${user.platformInfo.attendance}
            Волонтеры: ${user.platformInfo.volunteers}
            Контактное лицо: ${user.platformInfo.contactPerson}
            Телефон: ${user.platformInfo.contactPhone}
            Email: ${user.platformInfo.contactEmail}
            Мессенджер: ${user.platformInfo.contactMessenger}

            Подтвердить: [Ссылка на подтверждение]
            Отклонить: [Ссылка на отклонение]
        `;
        alert(`Письмо админу отправлено на zaslavv@yanex.ru:\n${letter}`);
        // In real - send email via API

        // Обновление ЛК
        document.getElementById('curator-platform-form').style.display = 'none';
        document.getElementById('curator-pending').style.display = 'block';
        document.getElementById('curator-pending-message').textContent = translations[currentLanguage].curator_pending_message;
    }
});