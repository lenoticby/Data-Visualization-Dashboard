// index.ts - A comprehensive TypeScript starter script for GitHub's Linguist
// Created by Abie Haryatmo, enhanced by Gemini

class Project {
    public readonly name: string;
    public readonly version: string = "1.0.0";

    constructor(name: string) {
        this.name = name;
    }

    public displayInfo(): void {
        console.log(`Project Name: ${this.name}`);
        console.log(`Version: ${this.version}`);
    }
}

const main = (): void => {
    const myProject = new Project("GitHub Auto-Repo Project");
    myProject.displayInfo();

    console.log("\nThis script is now comprehensive enough for GitHub's language detection.");
    
    const features: string[] = ["Classes", "Methods", "Type Annotations", "Loops"];
    console.log("Features demonstrated:");
    for (const feature of features) {
        console.log(`  - ${feature}`);
    }
};

main();
