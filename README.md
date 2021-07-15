# ict-nearby-earthquakes
This program gets list of earthquakes by coordinates (latitude and longitude of a city) for the last 30 days

# Why this example is cool

The main reason is that it uses [Cutie](https://github.com/Guseyn/cutie) extensions that basically implement [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

# How to run

You need installed Node.js + npm on your machine.

All you need then is just to run the command:

```bash
npm start
```

The program will ask you enter latitude and longitude of the place that you're interested in (by it deafult it's coordinates of New York city).

# Example of output

The program will show you 10 closest places to the one that you specified where earthquakes occured for the last 30 days.

```
1 km NNW of Irvington, Maryland || 285
2 km NNW of Irvington, Maryland || 285
6 km WNW of Ashland, Virginia || 451
8 km WNW of Massena, New York || 479
15 km SE of Arnprior, Canada || 544
5 km SE of Constance Bay, Canada || 554
33 km SSW of Lac-Mégantic, Canada || 561
26 km ESE of Notre-Dame-du-Mont-Carmel, Canada || 579
26 km N of Wakefield, Canada || 596
16 km SSE of Fort-Coulonge, Canada || 597
```

Each row has format: `place || distance from coordinates that you entered`
