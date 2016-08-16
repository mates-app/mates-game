import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GameInstance, GameConfig } from '../models';

@Injectable()
export class MatesServices{
  private pathGameInstance: string = "http://localhost:3000/v1/admin/game/";
  private pathGameConfigs: string = "http://localhost:3000/v1/admin/game-config";
  constructor(private http: Http) { }

  getGameInstance(id:string): Observable<GameInstance> {
    return this.http.get(this.pathGameInstance+id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getGameConfigs():Observable<GameConfig[]>{
     return this.http.get(this.pathGameConfigs)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    console.log('extractData', res, body)
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


  // getGameInstance():GameInstance {
/*
    return this.http.get(this.pathGameInstance)
    	.map(res => {
			     console.log(res);
			        return res;
      });
*/
  //   return this.gameMock;
  // }


//   gameMock:GameInstance = {
//   "instanceId": "576322f4af21d21adc4adabf",
//   "gameId": "5762d2b63e68b5130b5fcd03",
//   "levels": [
//     {
//       "gameProblems": [
//         {
//           "problemExpression": "{3}x^2 + {-21}x + {30} = 0",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{3}",
//             "{-2}",
//             "{5}",
//             "{-7}",
//             "{2}"
//           ],
//           "correctAnswer": [
//             "{5}",
//             "{2}"
//           ]
//         },
//         {
//           "problemExpression": "{3}x^2 + {-24}x + {45} = 0",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{3}",
//             "{4}",
//             "{11}",
//             "{5}",
//             "{6}"
//           ],
//           "correctAnswer": [
//             "{3}",
//             "{5}"
//           ]
//         },
//         {
//           "problemExpression": "{3}x^2 + {-15}x + {18} = 0",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{10}",
//             "{-1}",
//             "{3}",
//             "{4}",
//             "{2}"
//           ],
//           "correctAnswer": [
//             "{3}",
//             "{2}"
//           ]
//         },
//         {
//           "problemExpression": "{4}x^2 + {-28}x + {40} = 0",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{2}",
//             "{5}",
//             "{-6}",
//             "{-1}",
//             "{3}"
//           ],
//           "correctAnswer": [
//             "{2}",
//             "{5}"
//           ]
//         },
//         {
//           "problemExpression": "{4}x^2 + {-32}x + {64} = 0",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{4}",
//             "{12}",
//             "{6}",
//             "{10}",
//             "{4}"
//           ],
//           "correctAnswer": [
//             "{4}",
//             "{4}"
//           ]
//         }
//       ],
//       "scoreConfig": {
//         "baseScore": 10,
//         "preCount": 5,
//         "withTime": true,
//         "extras": [
//           {
//             "name": "Perfecto",
//             "extraTime": 5,
//             "extraScore": 5,
//             "thresholdTime": 5
//           },
//           {
//             "name": "Muy bien",
//             "extraTime": 3,
//             "extraScore": 3,
//             "thresholdTime": 7
//           },
//           {
//             "name": "Bien",
//             "extraTime": 0,
//             "extraScore": 1,
//             "thresholdTime": 10
//           }
//         ]
//       }
//     },
//     {
//       "gameProblems": [
//         {
//           "problemExpression": "( a \\land F )",
//           "solvedExpression": "",
//           "answerOptions": [
//             "Tautología",
//             "Verdadero",
//             "Falso",
//             "Contradicción"
//           ],
//           "correctAnswer": [
//             "Contradicción"
//           ]
//         },
//         {
//           "problemExpression": "( T \\land b )",
//           "solvedExpression": "",
//           "answerOptions": [
//             "Tautología",
//             "Verdadero",
//             "Falso",
//             "Contradicción"
//           ],
//           "correctAnswer": [
//             "Falso"
//           ]
//         },
//         {
//           "problemExpression": "( T \\Leftrightarrow b )",
//           "solvedExpression": "",
//           "answerOptions": [
//             "Tautología",
//             "Verdadero",
//             "Falso",
//             "Contradicción"
//           ],
//           "correctAnswer": [
//             "Verdadero"
//           ]
//         }
//       ],
//       "scoreConfig": {
//         "baseScore": 10,
//         "preCount": 0,
//         "withTime": true,
//         "extras": [
//           {
//             "name": "Perfecto",
//             "extraTime": 5,
//             "extraScore": 5,
//             "thresholdTime": 5
//           },
//           {
//             "name": "Muy bien",
//             "extraTime": 3,
//             "extraScore": 3,
//             "thresholdTime": 7
//           },
//           {
//             "name": "Bien",
//             "extraTime": 0,
//             "extraScore": 1,
//             "thresholdTime": 10
//           }
//         ]
//       }
//     },
//     {
//       "gameProblems": [
//         {
//           "problemExpression": "( {1} - {3} ) = ",
//           "solvedExpression": "( {1} - {3} ) = {-2}",
//           "answerOptions": [
//             "{1}",
//             "{-6}",
//             "{-2}",
//             "{-12}",
//             "{-4}"
//           ],
//           "correctAnswer": [
//             "{-2}"
//           ]
//         },
//         {
//           "problemExpression": "( {4} + {3} ) = ",
//           "solvedExpression": "( {4} + {3} ) = {7}",
//           "answerOptions": [
//             "{-3}",
//             "{5}",
//             "{6}",
//             "{7}",
//             "{15}"
//           ],
//           "correctAnswer": [
//             "{7}"
//           ]
//         },
//         {
//           "problemExpression": "( {5} + {1} ) = ",
//           "solvedExpression": "( {5} + {1} ) = {6}",
//           "answerOptions": [
//             "{3}",
//             "{6}",
//             "{-2}",
//             "{14}",
//             "{-4}"
//           ],
//           "correctAnswer": [
//             "{6}"
//           ]
//         },
//         {
//           "problemExpression": "( {4} + {2} ) = ",
//           "solvedExpression": "( {4} + {2} ) = {6}",
//           "answerOptions": [
//             "{12}",
//             "{6}",
//             "{0}",
//             "{-2}",
//             "{2}"
//           ],
//           "correctAnswer": [
//             "{6}"
//           ]
//         },
//         {
//           "problemExpression": "( {2} - {4} ) = ",
//           "solvedExpression": "( {2} - {4} ) = {-2}",
//           "answerOptions": [
//             "{-9}",
//             "{-3}",
//             "{-12}",
//             "{-11}",
//             "{-2}"
//           ],
//           "correctAnswer": [
//             "{-2}"
//           ]
//         }
//       ],
//       "scoreConfig": {
//         "baseScore": 10,
//         "preCount": 0,
//         "withTime": true,
//         "extras": [
//           {
//             "name": "Perfecto",
//             "extraTime": 5,
//             "extraScore": 5,
//             "thresholdTime": 5
//           },
//           {
//             "name": "Muy bien",
//             "extraTime": 3,
//             "extraScore": 3,
//             "thresholdTime": 7
//           },
//           {
//             "name": "Bien",
//             "extraTime": 0,
//             "extraScore": 1,
//             "thresholdTime": 10
//           }
//         ]
//       }
//     },
//     {
//       "gameProblems": [
//         {
//           "problemExpression": "\\begin{cases} {2}x - {5}y + {3} = {-14} \\\\{3}x - {1}y + {5} = {12} \\\\\\end{cases}",
//           "solvedExpression": null,
//           "answerOptions": [
//             "x = {4}\\: y = {5}",
//             "x = {-6}\\: y = {-5}",
//             "x = {-4}\\: y = {-3}"
//           ],
//           "correctAnswer": [
//             "x = {4}\\: y = {5}"
//           ]
//         },
//         {
//           "problemExpression": "\\begin{cases} {5}x + {2}y + {3} = {17} \\\\{1}x + {3}y + {2} = {10} \\\\\\end{cases}",
//           "solvedExpression": null,
//           "answerOptions": [
//             "x = {-8}\\: y = {-7}",
//             "x = {2}\\: y = {2}",
//             "x = {-6}\\: y = {-5}"
//           ],
//           "correctAnswer": [
//             "x = {2}\\: y = {2}"
//           ]
//         },
//         {
//           "problemExpression": "\\begin{cases} {4}x - {4}y + {4} = {16} \\\\{4}x - {1}y + {2} = {17} \\\\\\end{cases}",
//           "solvedExpression": null,
//           "answerOptions": [
//             "x = {4}\\: y = {1}",
//             "x = {-6}\\: y = {-5}",
//             "x = {-4}\\: y = {-3}"
//           ],
//           "correctAnswer": [
//             "x = {4}\\: y = {1}"
//           ]
//         }
//       ],
//       "scoreConfig": {
//         "baseScore": 10,
//         "preCount": 0,
//         "withTime": true,
//         "extras": [
//           {
//             "name": "Perfecto",
//             "extraTime": 5,
//             "extraScore": 5,
//             "thresholdTime": 5
//           },
//           {
//             "name": "Muy bien",
//             "extraTime": 3,
//             "extraScore": 3,
//             "thresholdTime": 7
//           },
//           {
//             "name": "Bien",
//             "extraTime": 0,
//             "extraScore": 1,
//             "thresholdTime": 10
//           }
//         ]
//       }
//     },
//     {
//       "gameProblems": [
//         {
//           "problemExpression": "{3}^{4}\\equiv x_{({4})}",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{1}",
//             "{2}",
//             "{3}",
//             "{0}"
//           ],
//           "correctAnswer": [
//             "{1}"
//           ]
//         },
//         {
//           "problemExpression": "{4}^{3}\\equiv x_{({2})}",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{1}",
//             "{0}"
//           ],
//           "correctAnswer": [
//             "{0}"
//           ]
//         },
//         {
//           "problemExpression": "{4}^{3}\\equiv x_{({3})}",
//           "solvedExpression": null,
//           "answerOptions": [
//             "{1}",
//             "{2}",
//             "{0}"
//           ],
//           "correctAnswer": [
//             "{1}"
//           ]
//         }
//       ],
//       "scoreConfig": {
//         "baseScore": 10,
//         "preCount": 0,
//         "withTime": true,
//         "extras": [
//           {
//             "name": "Perfecto",
//             "extraTime": 5,
//             "extraScore": 5,
//             "thresholdTime": 5
//           },
//           {
//             "name": "Muy bien",
//             "extraTime": 3,
//             "extraScore": 3,
//             "thresholdTime": 7
//           },
//           {
//             "name": "Bien",
//             "extraTime": 0,
//             "extraScore": 1,
//             "thresholdTime": 10
//           }
//         ]
//       }
//     }
//   ]
// };



}
