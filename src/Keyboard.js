class Keyboard {
    constructor(Tableau1) {
        this.scene = Tableau1
        //c'est parti !
        this._ecouteClavier();
    }

    /**
     * Méthode pour commencer à écouter le clavier
     * @private
     */
    _ecouteClavier() {
        let me=this
        //quand on appuie sur une touche du clavier
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
                return; // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
            }
            if (event.code==='ArrowLeft') {
               me.scene.player.gauche();
            }
            if (event.code==='ArrowRight') {
               me.scene.player.droite();
            }
            event.preventDefault(); // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
        }, true);
        window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) {
                return; // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
            }
            if (event.code==='ArrowLeft') {
                me.scene.player.pasbouger();
            }
            if (event.code==='ArrowRight') {
                me.scene.player.pasbouger();
            }
            if (event.code==='Space') {
                me.scene.ballT.launch()
            }
            event.preventDefault(); // je n'explique pas à quoi ça sert ça vous embrouillerait sans raison
        }, true);


    }
}