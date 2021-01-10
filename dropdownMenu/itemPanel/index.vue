<template>
    <div class="dropdown__content slider">
      
        <ul class="user-menu__list">
            <li class="menu__item lang__head" v-if="item.title" v-on:click="backClicked">
              <template v-if="hasParent"></template>
              <span>{{ item.title }}</span>
            </li>
            <li class="menu__item" v-for="child in item.children" v-bind:key="child.id" v-on:click="childClicked(child)">
              <span>{{ child.title }} <i v-if="child.icon" v-bind:data-icon="child.icon" class="lang__icon"></i>
                <transition name="slide">
                  <template v-if="child.children.length"></template>
                </transition>
              </span>
            </li>
        </ul>
        
    </div>
</template>

<script src="./ItemPanel.ts" lang="ts"></script>
<style src="./ItemPanel.less" lang="less" scoped></style>
