import './club-item.js';

class ClubList extends HTMLElement {
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    renderError(message) {
        this.innerHTML = `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement('club-item');
            clubItemElement.club = club;
            this.appendChild(clubItemElement);
        });
    }
}

customElements.define('club-list', ClubList);
