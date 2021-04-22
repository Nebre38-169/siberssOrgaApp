import { Base } from '../base/base';

export class Channel extends Base{
    public nom: string;
    public boquettes: string;
    constructor(
        id: number,
        creationDate: Date,
        updateDate: Date,
        nom: string,
        boquette: string
    ){
        super(id,creationDate,updateDate);
        this.nom = nom;
        this.boquettes = boquette;
    }

    public getBoquetteArr(): number[]{
        const boquetteAsString = this.boquettes.split(',');
        let result: number[] = [];
        for(const boquette of boquetteAsString){
            result.push(parseInt(boquette,10));
        }
        return result;
    }
}
