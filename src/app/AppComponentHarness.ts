import { ComponentHarness } from '@angular/cdk/testing'

export class AppComponentHarness extends ComponentHarness
{
    static hostSelector = 'app-root';
    private secondDivElement = this.locatorFor('.second');

    public async getSecondDivContent() : Promise<string>
    {
        const trigger = await this.secondDivElement;
        return (await trigger()).text();
    }
    
}