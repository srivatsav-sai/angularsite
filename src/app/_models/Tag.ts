export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'crimson')
    static readonly TYPESCRIPT = new Tag('TypeScript', 'royalblue')
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'mediumorchid')
    static readonly PYTHON = new Tag('Python', 'dodgerblue')
    static readonly MONGODB = new Tag('MongoDB', 'limegreen')
    static readonly DJANGO = new Tag('Django', 'mediumseagreen')
    static readonly CSS = new Tag('CSS', 'deepskyblue')
    static readonly FIREBASE = new Tag('Firebase', 'orangered')

    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}