import { Tag } from "./Tag";

export interface Project{
    id: number;
    myimage: string;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tag[];
}