export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'crimson')
    static readonly TYPESCRIPT = new Tag('TypeScript', 'royalblue')
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'darkviolet')
    static readonly PYTHON = new Tag('Python', 'mediumblue')
    static readonly MONGODB = new Tag('MongoDB', 'darkgreen')
    static readonly DJANGO = new Tag('Django', 'seagreen')
    static readonly CSS = new Tag('CSS', 'navy')
    static readonly FIREBASE = new Tag('Firebase', 'orangered')

    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}