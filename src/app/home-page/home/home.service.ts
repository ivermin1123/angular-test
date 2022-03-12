import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private readonly http: HttpClient) {}

  public getJackpot() {
    return this.http.get(
      `http://stage.whgstage.com/front-end-test/jackpots.php`
    )
  }
}
