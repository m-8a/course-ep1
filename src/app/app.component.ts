import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  length = 0;
  password = ' ';
  includeLettersCheck = false;
  includeNumbersCheck = false;
  includeSymbolsCheck = false;

  onChangeLength(value : string) {
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onButtonClick() {
    this.password = "MY PASSWORD!";
    console.log(`
    Generate password with following settings:
    Include Letters ${this.includeLettersCheck}
    Include Numbers ${this.includeNumbersCheck}
    Include Symbols ${this.includeSymbolsCheck}
    `);
  }

  onChangeUseLetters() {
    this.includeLettersCheck = !this.includeLettersCheck;
  }

  onChangeUseNumbers() {
    this.includeNumbersCheck = !this.includeNumbersCheck;
  }

  onChangeUseSymbols() {
    this.includeSymbolsCheck = !this.includeSymbolsCheck;
  }
}
