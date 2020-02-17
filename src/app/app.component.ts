import { Component } from "@angular/core";
import { generate } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  leng = 0;
  password = " ";
  includeLettersCheck = false;
  includeNumbersCheck = false;
  includeSymbolsCheck = false;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.leng = parsedValue;
    }
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

  onButtonClick() {
    this.password = "MY PASSWORD!";
    console.log(`
      Generate password with following settings:
      Include Letters ${this.includeLettersCheck}
      Include Numbers ${this.includeNumbersCheck}
      Include Symbols ${this.includeSymbolsCheck}
      `);

    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = '!"·$·%&/()=ç+}{[]';
    let validChars = "";

    if (this.includeLettersCheck) {
      validChars += letters;
    }

    if (this.includeNumbersCheck) {
      validChars += numbers;
    }

    if (this.includeSymbolsCheck) {
      validChars += symbols;
    }

    console.log("Valid chars :> ", validChars);

    let generatedPassword = "";
    for (let i = 0; i < this.leng; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
