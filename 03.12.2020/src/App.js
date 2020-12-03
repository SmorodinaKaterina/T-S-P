import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="wraper">
        <a name="top"></a>
        <div className="content">
          <nav>
            <ul>
              <li>
                <Link className="menu" to="/">
                  Каучуковый ластик
                </Link>
              </li>
              <li>
                <Link className="menu" to="/synthetic">
                  Синтетический ластик
                </Link>
              </li>
              <li>
                <Link className="menu" to="/mechanical">
                  Механический ластик
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/synthetic">
              <Synthetic />
            </Route>
            <Route path="/mechanical">
              <Mechanical />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <div className="footer">
          <p>Катерина Смородина</p>
          <a href="#top">
            <img
              class="up"
              src="https://www.clipartmax.com/png/full/43-432732_up-arrow-clip-art-green-up-arrow.png"
            ></img>
          </a>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <h2>
      <br />
      <br />
      Каучуковые ластики тоже делятся на подвиды. Есть ластики, которые содержат
      минимум абразивных наполнителей, а также наполнителей, которые делают
      материал терки более эластичным. Такие ластики имеют обычно светлый
      оттенок, они идеально подходят для того, чтобы качественно и быстро
      удалить следы графита с поверхности бумаги.
      <br />
      <br />
      Принцип работы данного вида ластика таков: графит прилипает к поверхности
      резинки, после чего поверхность одновременно очищается благодаря трению об
      бумагу, потому поверхность ластика всегда обновляется. Если ластик
      подобран подходящий к бумаге, то ее поверхность будет чистой и почти
      невредимой.
      <br />
      <br />
      Также есть каучуковые ластики, которые имеют меньшее количество смягчающих
      материал наполнителей и небольшую долю абразивных веществ. Такие ластики
      используются наиболее часто. Существуют и ластики на основе каучука,
      которые имеют большую долю абразивных веществ в своем составе. Такими
      веществами выступают пемза или наждак. Такие ластики нужны для того, чтобы
      стереть следы от чернил или пасты шариковой ручки. Такими ластиками нужно
      пользоваться очень осторожно, так как при работе с низкокачественной
      бумагой ее можно стереть до дыр.
      <br />
      <br />
      Особенность каучуковых ластиков в том, что со временем они затвердевают,
      потому во избежание ускорения этого процесса их нужно хранить вдали от
      солнца и открытого воздуха, лучше всего – в упаковке, тогда ластик
      сохранит свои свойства надолго.
    </h2>
  );
}

function Synthetic() {
  return (
    <h2>
      <br />
      <br />
      Синтетические ластики (иногда их также называют «пластиковыми»)
      производятся из мягких виниловых материалов, которые содержат минимальное
      количество абразивных веществ. Часто в процессе изготовления этого вида
      ластиков добавляются дополнительные размягчители, обеспечивающие повышение
      эластичности.
      <br />
      <br />
      Эти ластики применяются на бумаге, кальке, чертежной пленке. Они
      практически не вызывают появления статического электричества, что
      значительно уменьшает прилипание частичек ластика к рабочей поверхности.
      <br />
      <br />
      Обычно при стирании от виниловых ластиков отделяются широкие длинные
      частички. Это означает, что для удаления линий с поверхности требуется
      меньшее количество движений, а сами частички легко смахиваются с рабочей
      поверхности. Виниловые ластики, содержащие большое количество
      размягчителей, могут передавать эти вещества другим синтетическим
      материалам при соприкосновении. Чтобы предупредить это, виниловые ластики
      поставляются в практичной картонной оболочке. В отличие от каучуковых
      ластиков виниловые ластики не портятся с годами.
    </h2>
  );
}

function Mechanical() {
  return (
    <h2>
      <br />
      <br />
      Механические ластики нужны для того, чтобы окончательно удалить линии и
      следы с поверхности бумаги, применяя при этом скребки и абразивные
      материалы. В случае с использованием механических ластиков стоит понимать,
      что вместе с линией удалится и часть бумажной поверхности.
      <br />
      <br />
      Существуют стекловолокнистые механические ластики, которые имеют на
      окончании скопление стекловолокон узкого размера, расположенных внутри
      втулки параллельно. Втулка обеспечивает их жесткость, и когда волокна
      стираются, двигающий механизм предоставляет новую часть стекловолокон.
      <br />
      <br />
      Такие виды ластиков, как механические, используются в основном для
      удаления чернильных пятен, и применять их следует с большой осторожностью.
    </h2>
  );
}
