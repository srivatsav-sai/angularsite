export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'cyan')
    static readonly TYPESCRIPT = new Tag('TypeScript', 'coral')
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'cornflowerblue')
    static readonly PYTHON = new Tag('Python', 'crimson')
    static readonly MONGODB = new Tag('MongoDB', 'darkcyan')
    static readonly DJNAGO = new Tag('Django', 'darkseagreen')
    static readonly CSS = new Tag('CSS', 'dodgerblue')
    static readonly FIREBASE = new Tag('Firebase', 'goldenrod')

    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}