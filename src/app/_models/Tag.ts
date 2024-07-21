export class Tag{
    static readonly Angular = new Tag('Angular', 'cyan')
    static readonly TypeScript = new Tag('TypeScript', 'coral')
    static readonly Bootstrap = new Tag('Bootstrap', 'cornflowerblue')
    static readonly Python = new Tag('Python', 'crimson')
    static readonly MongoDB = new Tag('MongoDB', 'darkcyan')
    static readonly Django = new Tag('Django', 'darkseagrean')
    static readonly CSS = new Tag('CSS', 'dodgerblue')
    static readonly Firebase = new Tag('Firebase', 'goldenrod')

    private constructor(private readonly key: string, public readonly color: string){

    }
    toString(){
        return this.key;
    }
}