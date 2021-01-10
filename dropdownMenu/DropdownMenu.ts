import Vue, { PropType } from "vue";
import ItemPanel from "./itemPanel/index.vue";
import MenuItem from "./MenuItem";
import ClickOutside from "@/vue/components/directives/ClickOutside";

export default Vue.extend({
    components: {
        ItemPanel
    },
    directives: {
        ClickOutside
    },
    props: {
        rootItem: {
            type: Object as PropType<MenuItem>,
            required: true
        }
    },
    data() {
        return {
            isActive: false,
            currentItem: this.rootItem,
            parentStack: new Array<MenuItem>()
        };
    },
    watch: {
        rootItem(value) {
            this.currentItem = value;
            this.parentStack = new Array<MenuItem>();
        }
    },
    computed: {
        currentItemHasParent(): boolean {
            return this.parentStack.length > 0;
        }
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive;
        },
        collapse() {
            this.isActive = false;
        },
        goBack() {
            if (this.parentStack.length > 0) {
                this.currentItem = this.parentStack.pop()!;
            }
        },
        goNext(childItem: MenuItem) {
            if (childItem.children.length > 0) {
                this.parentStack.push(this.currentItem);
                this.currentItem = childItem;
            }
            this.$emit("child-clicked", childItem);
        }
    }
});
