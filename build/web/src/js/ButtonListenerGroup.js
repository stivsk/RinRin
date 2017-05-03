function ButtonListenerGroup() {
    
    const actions = new Actions();
    
    this.setButtonsListeners = (buttons) => {
        buttons.forEach((value)=> { 
            value.addEventListener('click', function(){
                actions[value.id]();
            });
        });
    };
}
