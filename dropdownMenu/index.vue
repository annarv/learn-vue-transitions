<template>
    <div class="dropdown__block" v-click-outside="collapse">
        <span class="dropdown__arrow" v-on:click="toggle"></span>
        <transition name="slide-down">
            <item-panel
                v-if="isActive"
                v-bind:item="currentItem"
                v-bind:hasParent="currentItemHasParent"
                v-on:back-clicked="goBack"
                v-on:child-clicked="goNext"
            ></item-panel>
        </transition>
    </div>
</template>

<script src="./DropdownMenu.ts" lang="ts"></script>
<style src="./DropdownMenu.less" lang="less" scoped></style>
