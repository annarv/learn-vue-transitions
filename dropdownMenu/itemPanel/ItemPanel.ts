import Vue, { PropType } from "vue";
import MenuItem from "../MenuItem";

export default Vue.extend({
    props: {
        hasParent: {
            type: Boolean,
            required: true
        },
        item: {
            type: Object as PropType<MenuItem>,
            required: true
        }
    },
    methods: {
        backClicked() {
            this.$emit("back-clicked");
        },
        childClicked(child: MenuItem) {
            this.$emit("child-clicked", child);
        }
    }
});
