<template>
    <nav class="navigation d-md-none">
        <input v-model="checked" type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <a href="#my-experience" class="navigation__link" @click="hideMenu()">My Experience</a>
                </li>
                <li class="navigation__item">
                    <a href="#work" class="navigation__link" @click="hideMenu()">My Work</a>
                </li>
                <li class="navigation__item">
                    <a href="#my-beliefs" class="navigation__link" @click="hideMenu()">My Core Beliefs</a>
                </li>
                <li class="navigation__item">
                    <a href="#contact" class="navigation__link" @click="hideMenu()">Contact</a>
                </li>
            </ul>
        </nav>
    </nav>
</template>	

<script>
export default {
    data() {
        return {
            checked: false
        }
    },
    methods: {
        hideMenu() {
            this.checked = !this.checked;
        }
    },
    created() {}
};
</script>
