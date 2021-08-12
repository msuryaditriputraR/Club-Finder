class ClubItem extends HTMLElement {
    set club(club) {
        this._fanArt = club.fanArt;
        this._name = club.name;
        this._description = club.description;
        this.render();
    }

    render() {
        this.innerHTML = `
            <img class="fan-art-club" src="${this._fanArt}" alt="Fan Art"> 
            <div class="club-info">
                <h2>${this._name}</h2>
                <p>${this._description}</p>
            </div>`;
    }
}

customElements.define('club-item', ClubItem);
