import { HttpClient } from "@angular/common/http"
import { Component, OnDestroy, OnInit } from "@angular/core"
import { data } from "./data.js"
import { HomeService } from "./home.service"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  //"top", "slots", "new"
  titles = [
    {
      name: "Top games",
      cate: "top",
    },
    {
      name: "New games",
      cate: "new",
    },
    {
      name: "Slots",
      cate: "slots",
    },
    {
      name: "classic",
      cate: "classic",
    },
    {
      name: "poker",
      cate: "poker",
    },
    {
      name: "roulette",
      cate: "roulette",
    },
    {
      name: "blackjack",
      cate: "blackjack",
    },
    {
      name: "other",
      cate: ["ball", "virtual", "fun"],
    },
  ]
  selectedValueIndex: number = 1

  listGame = data
  interval
  jackpot

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.getJackpot()
    this.interval = setInterval(() => {
      this.jackpot = this.getJackpot()
      console.log(this.jackpot)
    }, 5000)
  }

  getJackpotByGame(id) {
    if (!this.jackpot) return ""
    const jackpotObj = this.jackpot.filter(x => x.game === id)
    console.log({ jackpotObj })

    if (jackpotObj.length) {
      return `$${jackpotObj[0].amount}`
    }
    return ""
  }

  onChangeTitle(index: number) {
    this.selectedValueIndex = index
  }

  getJackpot() {
    this.http
      .get(`http://stage.whgstage.com/front-end-test/jackpots.php`)
      .subscribe(res => {
        this.jackpot = res
      })
  }

  sortNewAndTop(arr) {
    const newArr = arr
      .filter(x => {
        if (this.selectedValueIndex <= 6) {
          return x.categories.includes(
            this.titles[this.selectedValueIndex].cate
          )
        } else {
          const cates = x.categories
          if (
            cates.includes("ball") ||
            cates.includes("virtual") ||
            cates.includes("fun")
          ) {
            return true
          } else return false
        }
      })
      .map(x => {
        if (x.categories.includes("new")) x.sort = 0
        else if (x.categories.includes("top")) x.sort = 1
        else x.sort = 2
        return x
      })
      .sort((a, b) => (a.sort > b.sort ? 1 : -1))
    return newArr
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }
}
