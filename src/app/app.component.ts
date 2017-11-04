import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  started = false;
  gameOver = false;

  word;
  history = [];

  constructor(private http: Http) {
    this.http
      .get('http://alias.moydomen.com/words.json')
      .subscribe(resp => {
        this.vocabulary = resp.json();
        this.word = this.getNextWord();
      })
    ;
  }

  private vocabulary;

  private wordId = 0;

  onTimerFinish() {
    this.gameOver = true;
  }

  onWordPlayed(word) {
    this.history.push(word);
    this.word = this.getNextWord();
  }

  getNextWord() {
    return this.vocabulary[this.wordId++];
  }

  getScore() {
    console.log('calc score');
    return this.history.reduce((acc, word) => {
      return word.guessed ? ++acc : --acc;
    }, 0);
  }
}
