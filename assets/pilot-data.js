window.GECKODOCK_PILOT = {
  "hs90a": {
    "name": "HS90A",
    "description": "Белок HSP90α",
    "common": 202,
    "actives": 19,
    "methods": [
      {
        "method": "vina",
        "label": "Vina",
        "hits": 0,
        "auc": 0.3471383376473972,
        "failed": 4
      },
      {
        "method": "se",
        "label": "SE",
        "hits": 9,
        "auc": 0.7509347138337648,
        "failed": 18
      },
      {
        "method": "se_mm",
        "label": "SE/MM",
        "hits": 2,
        "auc": 0.7112453264308312,
        "failed": 18
      }
    ],
    "note": "SE находит 9 активных соединений среди первых 11; Vina — 0. SE/MM в этом пилоте находит 2."
  },
  "pa2ga": {
    "name": "PA2GA",
    "description": "Фосфолипаза A2",
    "common": 175,
    "actives": 20,
    "methods": [
      {
        "method": "vina",
        "label": "Vina",
        "hits": 2,
        "auc": 0.6241935483870968,
        "failed": 0
      },
      {
        "method": "se",
        "label": "SE",
        "hits": 5,
        "auc": 0.7903225806451613,
        "failed": 45
      },
      {
        "method": "se_mm",
        "label": "SE/MM",
        "hits": 2,
        "auc": 0.6609677419354838,
        "failed": 45
      }
    ],
    "note": "SE находит 5 активных соединений среди первых 11; Vina и SE/MM — по 2."
  },
  "fa7": {
    "name": "FA7",
    "description": "Фактор свёртывания крови VII",
    "common": 208,
    "actives": 20,
    "methods": [
      {
        "method": "vina",
        "label": "Vina",
        "hits": 7,
        "auc": 0.8997340425531914,
        "failed": 2
      },
      {
        "method": "se",
        "label": "SE",
        "hits": 10,
        "auc": 0.8925531914893617,
        "failed": 12
      },
      {
        "method": "se_mm",
        "label": "SE/MM",
        "hits": 10,
        "auc": 0.8960106382978723,
        "failed": 12
      }
    ],
    "note": "SE и SE/MM находят по 10 активных соединений среди первых 11; Vina — 7. При этом ROC-AUC у трёх методов близок."
  },
  "cdk2": {
    "name": "CDK2",
    "description": "Циклинзависимая киназа 2",
    "common": 204,
    "actives": 20,
    "methods": [
      {
        "method": "vina",
        "label": "Vina",
        "hits": 3,
        "auc": 0.7078804347826086,
        "failed": 1
      },
      {
        "method": "se",
        "label": "SE",
        "hits": 5,
        "auc": 0.8307065217391304,
        "failed": 16
      },
      {
        "method": "se_mm",
        "label": "SE/MM",
        "hits": 3,
        "auc": 0.7451086956521739,
        "failed": 16
      }
    ],
    "note": "SE находит 5 активных соединений среди первых 11; Vina и SE/MM — по 3."
  }
};
