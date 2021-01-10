export default class MenuItem {
    id: string;
    title: string;
    children: Array<MenuItem>;
    icon: string | undefined;

    constructor(id: string, title: string, children?: Array<MenuItem>, icon?: string) {
        this.id = id;
        this.title = title;
        this.children = children ?? new Array<MenuItem>();
        this.icon = icon;
    }
}
