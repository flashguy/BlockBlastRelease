System.register("chunks:///_virtual/BlocksPrefabs.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "a762fsc/+dCir2IctnRXr1e", "BlocksPrefabs", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BlocksPrefabs = exports('BlocksPrefabs', (_dec = ccclass('BlocksPrefabs'), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function BlocksPrefabs() {}
        BlocksPrefabs.setPrefabs = function setPrefabs(bloсksPrefabs) {
          this._bloсksPrefabs = bloсksPrefabs;
        };
        BlocksPrefabs.getblocksPrefabs = function getblocksPrefabs() {
          return this._bloсksPrefabs;
        };
        BlocksPrefabs.getBlockPrefabByType = function getBlockPrefabByType(type) {
          return this._bloсksPrefabs[type];
        };
        BlocksPrefabs.getLength = function getLength() {
          return this._bloсksPrefabs.length;
        };
        return BlocksPrefabs;
      }(), _class2._bloсksPrefabs = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BonusItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameEnumerations.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, SpriteFrame, Vec3, EventHandler, BonusType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Vec3 = module.Vec3;
      EventHandler = module.EventHandler;
    }, function (module) {
      BonusType = module.BonusType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a7fcfIXaQFL45CUJ/YMLbOv", "BonusItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BonusItem = exports('BonusItem', (_dec = ccclass('BonusItem'), _dec2 = property({
        type: BonusType
      }), _dec3 = property(SpriteFrame), _dec4 = property(Vec3), _dec5 = property([EventHandler]), _dec(_class = (_class2 = function BonusItem() {
        _initializerDefineProperty(this, "type", _descriptor, this);
        _initializerDefineProperty(this, "price", _descriptor2, this);
        _initializerDefineProperty(this, "icon", _descriptor3, this);
        _initializerDefineProperty(this, "iconScale", _descriptor4, this);
        _initializerDefineProperty(this, "clickEvents", _descriptor5, this);
      } // @property(EventHandler)
      // public clickEvent:EventHandler = null;
      , (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BonusType.BOMB;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "price", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clickEvents", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BonusItemScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "cd526mQHMlAf7eyBn+msxfX", "BonusItemScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BonusItemScript = exports('BonusItemScript', (_dec = ccclass('BonusItemScript'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BonusItemScript, _Component);
        function BonusItemScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor3, _assertThisInitialized(_this));
          _this._item = void 0;
          _this._available = false;
          return _this;
        }
        var _proto = BonusItemScript.prototype;
        _proto.init = function init(item) {
          this._item = item;
          this.label.string = item.price.toString();
          var sprite = this.icon.addComponent(Sprite);
          sprite.spriteFrame = item.icon;
          this.icon.setScale(item.iconScale);
        };
        _proto.click = function click() {
          if (this._available) this._item.clickEvents[0].emit([this._item]);
        };
        _proto.updateAvailable = function updateAvailable(money) {
          this._available = money >= this._item.price;
          this.bg.getComponent(Sprite).grayscale = !this._available;
        };
        return BonusItemScript;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BonusPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts', './BonusItemScript.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Vec3, HiddenPanel, BonusItemScript;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }, function (module) {
      BonusItemScript = module.BonusItemScript;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9fedcJHX/1AeK/MxieASW4G", "BonusPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BonusPanelScript = exports('BonusPanelScript', (_dec = ccclass('BonusPanelScript'), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(BonusPanelScript, _HiddenPanel);
        function BonusPanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bonusItem", _descriptor, _assertThisInitialized(_this));
          _this.bonuses = void 0;
          return _this;
        }
        var _proto = BonusPanelScript.prototype;
        _proto.init = function init(bonuses) {
          this.node.removeAllChildren();
          this.bonuses = new Array();
          for (var i = 0; i < bonuses.length; i++) {
            var bonus = instantiate(this.bonusItem);
            bonus.setPosition(new Vec3(0, 150 * i - (bonuses.length - 1) * 150 / 2));
            var bonusScript = bonus.getComponent(BonusItemScript);
            bonusScript.init(bonuses[i]);
            this.bonuses.push(bonusScript);
            this.node.addChild(bonus);
          }
        };
        _proto.updateBonuses = function updateBonuses(money) {
          for (var i = 0; i < this.bonuses.length; i++) {
            var bonus = this.bonuses[i];
            bonus.updateAvailable(money);
          }
        };
        return BonusPanelScript;
      }(HiddenPanel), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bonusItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator, Vec2;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b9c009u8MpOxpLDzUMlbIx0", "Cell", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Cell = exports('Cell', (_dec = ccclass('Cell'), _dec(_class = /*#__PURE__*/function () {
        function Cell() {
          this._type = void 0;
          this._width = void 0;
          this._height = void 0;
          this._halfWidth = void 0;
          this._halfHeight = void 0;
          this._center = new Vec2();
          this.vertices = new Map();
          this.edges = new Map();
        }
        var _proto = Cell.prototype;
        _proto.getVertex = function getVertex(key) {
          return this.vertices[key];
        };
        _proto.getVertices = function getVertices() {
          return this.vertices;
        };
        _proto.getEdges = function getEdges() {
          return this.edges;
        };
        _proto.initialize = function initialize() {
          this._halfWidth = this._width / 2;
          this._halfHeight = this._height / 2;
          this._center.set(this._halfWidth, this._halfHeight);
          this.setVertices();
          this.setEdges();
        };
        _createClass(Cell, [{
          key: "type",
          get: function get() {
            return this._type;
          }
        }, {
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }, {
          key: "halfWidth",
          get: function get() {
            return this._halfWidth;
          }
        }, {
          key: "halfHeight",
          get: function get() {
            return this._halfHeight;
          }
        }, {
          key: "center",
          get: function get() {
            return this._center;
          }
        }]);
        return Cell;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CellFromRectangle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Cell.ts', './Enumerations.ts', './Edge.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec2, Cell, Position, CellType, Edge;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }, function (module) {
      Cell = module.Cell;
    }, function (module) {
      Position = module.Position;
      CellType = module.CellType;
    }, function (module) {
      Edge = module.Edge;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c0c012bq2hGyoNBdSia5/Ci", "CellFromRectangle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CellFromRectangle = exports('CellFromRectangle', (_dec = ccclass('CellFromRectangle'), _dec(_class = /*#__PURE__*/function (_Cell) {
        _inheritsLoose(CellFromRectangle, _Cell);
        function CellFromRectangle(width, height) {
          var _this;
          _this = _Cell.call(this) || this;
          _this._type = CellType.RECTANGLE;
          _this._width = width;
          _this._height = height;
          _this.initialize();
          return _this;
        }
        var _proto = CellFromRectangle.prototype;
        _proto.setVertices = function setVertices() {
          this.vertices.set(Position.LB, new Vec2(0, 0)); // !!!!!!!!!!!! неправильные координаты поправить или оставить и задавать Anchor Point (0, 0) и будет как в юнити
          this.vertices.set(Position.RB, new Vec2(this._width, 0));
          this.vertices.set(Position.RT, new Vec2(this._width, this._height));
          this.vertices.set(Position.LT, new Vec2(0, this._height));
        };
        _proto.setEdges = function setEdges() {
          // INFO: рёбра нужно указывать против часовой стрелки для корректной работы алгоритма PointToEdgeDistance
          this.edges.set(Position.B, new Edge(this.vertices.get(Position.LB).clone(), this.vertices.get(Position.RB).clone()));
          this.edges.set(Position.R, new Edge(this.vertices.get(Position.RB).clone(), this.vertices.get(Position.RT).clone()));
          this.edges.set(Position.T, new Edge(this.vertices.get(Position.RT).clone(), this.vertices.get(Position.LT).clone()));
          this.edges.set(Position.L, new Edge(this.vertices.get(Position.LT).clone(), this.vertices.get(Position.LB).clone()));
        };
        return CellFromRectangle;
      }(Cell)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Edge.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Vec2;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bb4edeL6tpOpo9FAZ4f9JzJ", "Edge", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Edge = exports('Edge', (_dec = ccclass('Edge'), _dec(_class = /*#__PURE__*/function () {
        function Edge(v1, v2) {
          this.v1 = void 0;
          this.v2 = void 0;
          this.v1 = v1 ? v1.clone() : new Vec2();
          this.v2 = v2 ? v2.clone() : new Vec2();
        }
        var _proto = Edge.prototype;
        _proto.set = function set(e) {
          this.v1.set(e.v1);
          this.v2.set(e.v2);
          return this;
        };
        _proto.add = function add(v) {
          this.v1.add(v);
          this.v2.add(v);
          return this;
        };
        _proto.pointToEdgeDistance = function pointToEdgeDistance(v) {
          return (this.v2.x - this.v1.x) * (v.y - this.v1.y) - (this.v2.y - this.v1.y) * (v.x - this.v1.x);
        };
        _proto.toString = function toString() {
          return "{ v1 " + this.v1.toString() + ", v2 " + this.v2.toString() + " }";
        };
        return Edge;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Enumerations.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9838ayyKENF+qt4ZO18bxP1", "Enumerations", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Position = exports('Position', /*#__PURE__*/function (Position) {
        Position[Position["OUT"] = 1] = "OUT";
        Position[Position["IN"] = 2] = "IN";
        Position[Position["C"] = 3] = "C";
        Position[Position["L"] = 4] = "L";
        Position[Position["T"] = 5] = "T";
        Position[Position["R"] = 6] = "R";
        Position[Position["B"] = 7] = "B";
        Position[Position["LB"] = 8] = "LB";
        Position[Position["LT"] = 9] = "LT";
        Position[Position["RT"] = 10] = "RT";
        Position[Position["RB"] = 11] = "RB";
        Position[Position["UP"] = 12] = "UP";
        Position[Position["DOWN"] = 13] = "DOWN";
        return Position;
      }({}));
      var CellType = exports('CellType', /*#__PURE__*/function (CellType) {
        CellType[CellType["RECTANGLE"] = 0] = "RECTANGLE";
        CellType[CellType["OVAL"] = 1] = "OVAL";
        CellType[CellType["RHOMB"] = 2] = "RHOMB";
        CellType[CellType["PARALLELOGRAM"] = 3] = "PARALLELOGRAM";
        CellType[CellType["HEXAGON"] = 4] = "HEXAGON";
        CellType[CellType["ISOMETRIC_HEXAGON"] = 5] = "ISOMETRIC_HEXAGON";
        return CellType;
      }({}));
      var PositionToString = exports('PositionToString', /*#__PURE__*/function () {
        function PositionToString() {}
        PositionToString.toString = function toString(key) {
          switch (key) {
            case Position.OUT:
              return "OUT";
            case Position.IN:
              return "IN";
            case Position.C:
              return "C";
            case Position.L:
              return "L";
            case Position.T:
              return "T";
            case Position.R:
              return "R";
            case Position.B:
              return "B";
            case Position.LB:
              return "LB";
            case Position.LT:
              return "LT";
            case Position.RT:
              return "RT";
            case Position.RB:
              return "RB";
            case Position.UP:
              return "UP";
            case Position.DOWN:
              return "DOWN";
            default:
              return "В перечислении Position нет ключа с таким именем '" + key + "'";
          }
        };
        return PositionToString;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FieldLogic.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CellFromRectangle.ts', './RectangleGrid.ts', './ShapeBuilder.ts', './Enumerations.ts', './Tile.ts', './FieldPanelScript.ts', './BlocksPrefabs.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Vec2, randomRangeInt, instantiate, Vec3, Component, CellFromRectangle, RectangleGrid, ShapeBuilder, Position, Tile, FieldPanelScript, BlocksPrefabs;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec2 = module.Vec2;
      randomRangeInt = module.randomRangeInt;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      CellFromRectangle = module.CellFromRectangle;
    }, function (module) {
      RectangleGrid = module.RectangleGrid;
    }, function (module) {
      ShapeBuilder = module.ShapeBuilder;
    }, function (module) {
      Position = module.Position;
    }, function (module) {
      Tile = module.Tile;
    }, function (module) {
      FieldPanelScript = module.FieldPanelScript;
    }, function (module) {
      BlocksPrefabs = module.BlocksPrefabs;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "6110exvDt9Pi7tDD4W6dwuV", "FieldLogic", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FieldLogic = exports('FieldLogic', (_dec = ccclass('FieldLogic'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FieldLogic, _Component);
        function FieldLogic() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fieldPanel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fieldSize", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cellSize", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "minBlocksGroup", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxShuffleTry", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bombDistance", _descriptor6, _assertThisInitialized(_this));
          _this._fieldPanelScript = void 0;
          _this._cell = void 0;
          _this._grid = void 0;
          _this._shapeRectangle = void 0;
          _this._checkedPositions = new Array();
          _this._firstSelectedTile = void 0;
          _this._searchStackDepth = 0;
          _this._offsetNewTile = new Map();
          _this.tiles = new Array();
          _this.selectedTiles = new Array();
          return _this;
        }
        var _proto = FieldLogic.prototype;
        _proto.start = function start() {
          this._fieldPanelScript = this.fieldPanel.getComponent(FieldPanelScript);
        };
        _proto.initialize = function initialize() {
          var _this2 = this;
          this._cell = new CellFromRectangle(this.cellSize.x, this.cellSize.y);
          this._grid = new RectangleGrid(this._cell, new Vec2(this.fieldSize.x % 2 == 0 ? 0 : -this._cell.halfWidth, this.fieldSize.y % 2 == 0 ? 0 : -this._cell.halfHeight), new Vec2());
          this._shapeRectangle = ShapeBuilder.getRectangle(new Vec2(), Position.C, this.fieldSize);
          this.clearTiles();
          this.shapeRectangle.get().forEach(function (cellPoint) {
            _this2.createTile(cellPoint.clone());
          });
        };
        _proto.createTile = function createTile(cellPoint) {
          var inScreen = this.grid.gridToScreen(cellPoint);
          var tileType = randomRangeInt(0, BlocksPrefabs.getLength());
          // let tileType:number = randomRangeInt(0, 3);
          var blockPrefab = instantiate(BlocksPrefabs.getBlockPrefabByType(tileType));
          blockPrefab.active = true;
          blockPrefab.setPosition(new Vec3(inScreen.x, inScreen.y, 0));
          this._fieldPanelScript.add(blockPrefab);
          var tile = new Tile();
          tile.pos = cellPoint;
          tile.node = blockPrefab;
          tile.type = tileType;
          tile.updateLabel(); // INFO: включает отладочную информацию
          tile.init();
          this.tiles.push(tile);
          return tile;
        };
        _proto.clearTiles = function clearTiles() {
          this.tiles = new Array();
        };
        _proto.clearSelectedTiles = function clearSelectedTiles() {
          this.selectedTiles = new Array();
        };
        _proto.getTyleByGridPosition = function getTyleByGridPosition(pos) {
          for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].pos.equals(pos)) return this.tiles[i];
          }
          return null;
        };
        _proto.getTyleIndexByGridPosition = function getTyleIndexByGridPosition(pos) {
          for (var i = 0; i < this.tiles.length; i++) {
            if (this.tiles[i].pos.equals(pos)) return i;
          }
          return -1;
        };
        _proto.isTyleChecked = function isTyleChecked(pos) {
          for (var i = 0; i < this._checkedPositions.length; i++) {
            if (pos.equals(this._checkedPositions[i])) return true;
          }
          return false;
        };
        _proto.getSimpleClick = function getSimpleClick(pos) {
          this._searchStackDepth = 0;
          this._checkedPositions = new Array();
          this._firstSelectedTile = this.getTyleByGridPosition(pos);
          this.selectedTiles.push(this._firstSelectedTile);
          this.checkNeighbors(pos, null);
        };
        _proto.checkNeighbors = function checkNeighbors(pos, excludededParent) {
          this._searchStackDepth++;
          this._checkedPositions.push(pos);
          if (excludededParent != Position.L) {
            this.checkNeighbor(pos, Position.L, Position.R);
          }
          if (excludededParent != Position.T) {
            this.checkNeighbor(pos, Position.T, Position.B);
          }
          if (excludededParent != Position.R) {
            this.checkNeighbor(pos, Position.R, Position.L);
          }
          if (excludededParent != Position.B) {
            this.checkNeighbor(pos, Position.B, Position.T);
          }
          this._searchStackDepth--;
          if (this._searchStackDepth == 0) ;
        };
        _proto.checkNeighbor = function checkNeighbor(pos, direction, excludededParent) {
          var tempTile;
          var tempPos;
          tempPos = this._grid.getCellNeighbor(pos, direction);
          if (this._shapeRectangle.isInShape(tempPos) && !this.isTyleChecked(tempPos)) {
            tempTile = this.getTyleByGridPosition(tempPos);
            if (tempTile != null && this._firstSelectedTile.type == tempTile.type) {
              this.selectedTiles.push(tempTile);
              this.checkNeighbors(tempTile.pos, excludededParent);
            }
          }
        };
        _proto.spawnNewTiles = function spawnNewTiles() {
          var _this3 = this;
          this.clearSelectedTiles();
          this._offsetNewTile.clear();
          var loop = true;
          while (loop) {
            loop = false;
            this.shapeRectangle.get().forEach(function (cellPoint) {
              if (_this3.getTyleByGridPosition(cellPoint) == null) {
                if (cellPoint.y == _this3.shapeRectangle.rt.y) {
                  var newTile = _this3.createTile(cellPoint.clone());
                  if (_this3._offsetNewTile.get(cellPoint.x)) _this3._offsetNewTile.set(cellPoint.x, _this3._offsetNewTile.get(cellPoint.x) + 1);else _this3._offsetNewTile.set(cellPoint.x, 1);
                  var newPos = cellPoint.clone();
                  newPos.y += _this3._offsetNewTile.get(cellPoint.x);
                  var inScreen = _this3.grid.gridToScreen(newPos);
                  newTile.node.setPosition(new Vec3(inScreen.x, inScreen.y, 0));
                  _this3.selectedTiles.push(newTile);
                } else {
                  var upPos = _this3.grid.getCellNeighbor(cellPoint, Position.T);
                  var upTile = _this3.getTyleByGridPosition(upPos);
                  if (upTile != null) {
                    upTile.pos = cellPoint.clone();
                    upTile.updateLabel();
                    _this3.selectedTiles.push(upTile);
                  }
                }
                loop = true;
              }
            });
          }
        };
        _proto.checkNeedShuffle = function checkNeedShuffle() {
          var isShuffleNeed = true;
          for (var i = 0; i < this.tiles.length; i++) {
            var currentTile = this.tiles[i];
            var leftTile = this.getTyleByGridPosition(this._grid.getCellNeighbor(currentTile.pos, Position.L));
            var topTile = this.getTyleByGridPosition(this._grid.getCellNeighbor(currentTile.pos, Position.T));
            var rightTile = this.getTyleByGridPosition(this._grid.getCellNeighbor(currentTile.pos, Position.R));
            var bottomTile = this.getTyleByGridPosition(this._grid.getCellNeighbor(currentTile.pos, Position.B));
            if (leftTile != null && leftTile.type == currentTile.type) {
              isShuffleNeed = false;
              break;
            }
            if (topTile != null && topTile.type == currentTile.type) {
              isShuffleNeed = false;
              break;
            }
            if (rightTile != null && rightTile.type == currentTile.type) {
              isShuffleNeed = false;
              break;
            }
            if (bottomTile != null && bottomTile.type == currentTile.type) {
              isShuffleNeed = false;
              break;
            }
          }
          return isShuffleNeed;
        };
        _proto.sortTiles = function sortTiles() {
          this.tiles.sort(function (a, b) {
            if (a.pos.y < b.pos.y) {
              return -1;
            } else if (a.pos.y > b.pos.y) {
              return 1;
            } else {
              if (a.pos.x < b.pos.x) {
                return -1;
              } else if (a.pos.x > b.pos.x) {
                return 1;
              }
              return 0;
            }
          });
        };
        _proto.shuffle = function shuffle() {
          for (var i = this.tiles.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var leftTile = this.tiles[j];
            var rightTile = this.tiles[i];
            var tempPos = leftTile.pos.clone();
            leftTile.pos = rightTile.pos.clone();
            leftTile.updateLabel();
            rightTile.pos = tempPos.clone();
            rightTile.updateLabel();
          }
          this.sortTiles();
        };
        _proto.selectCircle = function selectCircle(pos) {
          var _this4 = this;
          var shapeCircle = ShapeBuilder.getMidpointCircle(pos, this.bombDistance);
          shapeCircle.get().forEach(function (cellPoint) {
            if (_this4._shapeRectangle.isInShape(cellPoint)) {
              _this4.selectedTiles.push(_this4.getTyleByGridPosition(cellPoint));
            }
          });
        };
        _createClass(FieldLogic, [{
          key: "cell",
          get: function get() {
            return this._cell;
          }
        }, {
          key: "grid",
          get: function get() {
            return this._grid;
          }
        }, {
          key: "shapeRectangle",
          get: function get() {
            return this._shapeRectangle;
          }
        }, {
          key: "getFieldSize",
          get: function get() {
            return this.fieldSize;
          }
        }, {
          key: "getCellSize",
          get: function get() {
            return this.cellSize;
          }
        }]);
        return FieldLogic;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fieldPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fieldSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(8, 8);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cellSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(85.5, 85.5);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "minBlocksGroup", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maxShuffleTry", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bombDistance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FieldPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, UITransform, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UITransform = module.UITransform;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6d9d0lhhHBN95KxZyYrPpA4", "FieldPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FieldPanelScript = exports('FieldPanelScript', (_dec = ccclass('FieldPanelScript'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(FieldPanelScript, _HiddenPanel);
        function FieldPanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fieldBG", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sizeScale", _descriptor3, _assertThisInitialized(_this));
          _this._uiTransform = void 0;
          return _this;
        }
        var _proto = FieldPanelScript.prototype;
        _proto.clear = function clear() {
          this.content.removeAllChildren();
        };
        _proto.add = function add(node) {
          this.content.addChild(node);
        };
        _proto.remove = function remove(node) {
          this.content.removeChild(node);
        };
        _proto.init = function init(size, cellSize) {
          this.node.active = true;
          this._uiTransform = this.fieldBG.getComponent(UITransform);
          this._uiTransform.setContentSize(this.sizeScale * (size.x * cellSize.x) / 100, this.sizeScale * (size.y * cellSize.x) / 100);
        };
        _proto.getContentXY = function getContentXY(v) {
          return this._uiTransform.convertToNodeSpaceAR(v);
        };
        return FieldPanelScript;
      }(HiddenPanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fieldBG", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sizeScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameEnumerations.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "898fexC4yBDII8J5fPn15IH", "GameEnumerations", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BonusType = exports('BonusType', /*#__PURE__*/function (BonusType) {
        BonusType[BonusType["BOMB"] = 0] = "BOMB";
        BonusType[BonusType["SWAP"] = 1] = "SWAP";
        return BonusType;
      }({}));
      Enum(BonusType);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Enumerations.ts', './ProgressPanelScript.ts', './ScorePanelScript.ts', './LevelPanelScript.ts', './Level.ts', './FieldPanelScript.ts', './FieldLogic.ts', './PauseButtonPanelScript.ts', './GoalsPanelScript.ts', './MovesPanelScript.ts', './MoneyPanelScript.ts', './BonusPanelScript.ts', './LevelScorePanelScript.ts', './RangeValue.ts', './RangeVerifier.ts', './BlocksPrefabs.ts', './LabelPanelScript.ts', './BonusItem.ts', './GameEnumerations.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ProgressBar, Prefab, input, Input, math, director, tween, Vec3, Vec2, Component, Position, ProgressPanelScript, ScorePanelScript, LevelPanelScript, Level, FieldPanelScript, FieldLogic, PauseButtonPanelScript, GoalsPanelScript, MovesPaneScript, MoneyPanelScript, BonusPanelScript, LevelScorePanelScript, RangeValue, RangeVerifier, BlocksPrefabs, LabelPanelScript, BonusItem, BonusType;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      Prefab = module.Prefab;
      input = module.input;
      Input = module.Input;
      math = module.math;
      director = module.director;
      tween = module.tween;
      Vec3 = module.Vec3;
      Vec2 = module.Vec2;
      Component = module.Component;
    }, function (module) {
      Position = module.Position;
    }, function (module) {
      ProgressPanelScript = module.ProgressPanelScript;
    }, function (module) {
      ScorePanelScript = module.ScorePanelScript;
    }, function (module) {
      LevelPanelScript = module.LevelPanelScript;
    }, function (module) {
      Level = module.Level;
    }, function (module) {
      FieldPanelScript = module.FieldPanelScript;
    }, function (module) {
      FieldLogic = module.FieldLogic;
    }, function (module) {
      PauseButtonPanelScript = module.PauseButtonPanelScript;
    }, function (module) {
      GoalsPanelScript = module.GoalsPanelScript;
    }, function (module) {
      MovesPaneScript = module.MovesPaneScript;
    }, function (module) {
      MoneyPanelScript = module.MoneyPanelScript;
    }, function (module) {
      BonusPanelScript = module.BonusPanelScript;
    }, function (module) {
      LevelScorePanelScript = module.LevelScorePanelScript;
    }, function (module) {
      RangeValue = module.RangeValue;
    }, function (module) {
      RangeVerifier = module.RangeVerifier;
    }, function (module) {
      BlocksPrefabs = module.BlocksPrefabs;
    }, function (module) {
      LabelPanelScript = module.LabelPanelScript;
    }, function (module) {
      BonusItem = module.BonusItem;
    }, function (module) {
      BonusType = module.BonusType;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "586b1fN+xRMLr6zcs2Nd3oi", "GameScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["SHOW_LEVEL_WINDOW"] = 0] = "SHOW_LEVEL_WINDOW";
        GameState[GameState["SHOW_SCORE_WINDOW"] = 1] = "SHOW_SCORE_WINDOW";
        GameState[GameState["START_LEVEL"] = 2] = "START_LEVEL";
        GameState[GameState["CREATE_LEVEL"] = 3] = "CREATE_LEVEL";
        GameState[GameState["WAIT_SIMPLE_CLICK"] = 4] = "WAIT_SIMPLE_CLICK";
        GameState[GameState["WAIT_BOMB_CLICK"] = 5] = "WAIT_BOMB_CLICK";
        GameState[GameState["WAIT_SWAP_CLICK"] = 6] = "WAIT_SWAP_CLICK";
        GameState[GameState["SEARCH_TILES"] = 7] = "SEARCH_TILES";
        GameState[GameState["REMOVE_SELECTED_TILES"] = 8] = "REMOVE_SELECTED_TILES";
        GameState[GameState["CHECK_END_GAME"] = 9] = "CHECK_END_GAME";
        GameState[GameState["SPAWN_NEW_TILES"] = 10] = "SPAWN_NEW_TILES";
        GameState[GameState["CHECK_NEED_SHUFFLE"] = 11] = "CHECK_NEED_SHUFFLE";
        GameState[GameState["WAIT_SWAP"] = 12] = "WAIT_SWAP";
        GameState[GameState["FAIL_GAME"] = 13] = "FAIL_GAME";
        GameState[GameState["WIN_LEVEL"] = 14] = "WIN_LEVEL";
        GameState[GameState["NO_MOVES"] = 15] = "NO_MOVES";
        GameState[GameState["PAUSE"] = 16] = "PAUSE";
        return GameState;
      }(GameState || {});
      var GameStateToString = exports('GameStateToString', /*#__PURE__*/function () {
        function GameStateToString() {}
        GameStateToString.toString = function toString(key) {
          switch (key) {
            case GameState.SHOW_LEVEL_WINDOW:
              return "SHOW_LEVEL_WINDOW";
            case GameState.SHOW_SCORE_WINDOW:
              return "SHOW_SCORE_WINDOW";
            case GameState.START_LEVEL:
              return "START_LEVEL";
            case GameState.CREATE_LEVEL:
              return "LOAD_LEVEL";
            case GameState.WAIT_SIMPLE_CLICK:
              return "WAIT_SIMPLE_CLICK";
            case GameState.WAIT_BOMB_CLICK:
              return "WAIT_BOMB_CLICK";
            case GameState.WAIT_SWAP_CLICK:
              return "WAIT_SWAP_CLICK";
            case GameState.SEARCH_TILES:
              return "SEARCH_TILES";
            case GameState.REMOVE_SELECTED_TILES:
              return "REMOVE_SELECTED_TILES";
            case GameState.CHECK_END_GAME:
              return "CHECK_END_GAME";
            case GameState.SPAWN_NEW_TILES:
              return "SPAWN_NEW_TILES";
            case GameState.CHECK_NEED_SHUFFLE:
              return "CHECK_NEED_SHUFFLE";
            case GameState.WAIT_SWAP:
              return "WAIT_SWAP";
            case GameState.FAIL_GAME:
              return "FAIL_GAME";
            case GameState.WIN_LEVEL:
              return "WIN_LEVEL";
            case GameState.NO_MOVES:
              return "NO_MOVES";
            case GameState.PAUSE:
              return "PAUSE";
            default:
              return "В перечислении GameState нет ключа с таким именем '" + key + "'";
          }
        };
        return GameStateToString;
      }());
      var GameScript = exports('GameScript', (_dec = ccclass('GameScript'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(ProgressBar), _dec15 = property([Prefab]), _dec16 = property([Level]), _dec17 = property([RangeValue]), _dec18 = property([RangeValue]), _dec19 = property([BonusItem]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameScript, _Component);
        function GameScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fieldPanel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressPanel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scorePanel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelPanel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pausePanel", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goalsPanel", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mavesPanel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelPanel", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moneyPanel", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelScorePanel", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonusPanel", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "screenLoaderPanel", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blo\u0441kPrefabs", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levels", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "revardsMoney", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "revardsScore", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bonuses", _descriptor18, _assertThisInitialized(_this));
          _this._fieldLogic = void 0;
          _this._fieldPanelScript = void 0;
          _this._progressPanelScript = void 0;
          _this._scorePanelScript = void 0;
          _this._levelPanelScript = void 0;
          _this._pauseButtonPanelScript = void 0;
          _this._goalsPanelScript = void 0;
          _this._movesPanelScript = void 0;
          _this._labelPanelScript = void 0;
          _this._moneyPanelScript = void 0;
          _this._levelScorePanelScript = void 0;
          _this._bonusPanelScript = void 0;
          _this._currentState = void 0;
          _this._currentLevel = -1;
          _this._currentLevelData = null;
          _this._movesLeft = void 0;
          _this._lastDeletedBlocksCount = 0;
          _this._rewardMoney = 0;
          _this._rewardScore = 0;
          _this._maxLevelBlocksProgress = 0;
          _this._currentLevelBlocksProgress = 0;
          _this._goalsBlock = new Map();
          _this._currentShuffleTry = 0;
          _this._startedAnimations = 0;
          _this._swapTile = null;
          _this._isPause = false;
          _this.onPorogressLoadScreene = function (completedCount, totalCount, iten) {
            _this.progressBar.progress = completedCount / totalCount;
          };
          return _this;
        }
        var _proto = GameScript.prototype;
        _proto.start = function start() {
          BlocksPrefabs.setPrefabs(this.bloсkPrefabs);
          this._fieldLogic = this.node.getComponent(FieldLogic);
          this._fieldPanelScript = this.fieldPanel.getComponent(FieldPanelScript);
          this._progressPanelScript = this.progressPanel.getComponent(ProgressPanelScript);
          this._scorePanelScript = this.scorePanel.getComponent(ScorePanelScript);
          this._levelPanelScript = this.levelPanel.getComponent(LevelPanelScript);
          this._pauseButtonPanelScript = this.pausePanel.getComponent(PauseButtonPanelScript);
          this._goalsPanelScript = this.goalsPanel.getComponent(GoalsPanelScript);
          this._movesPanelScript = this.mavesPanel.getComponent(MovesPaneScript);
          this._labelPanelScript = this.labelPanel.getComponent(LabelPanelScript);
          this._moneyPanelScript = this.moneyPanel.getComponent(MoneyPanelScript);
          this._levelScorePanelScript = this.levelScorePanel.getComponent(LevelScorePanelScript);
          this._bonusPanelScript = this.bonusPanel.getComponent(BonusPanelScript);
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.setState(GameState.SHOW_LEVEL_WINDOW);
        };
        _proto.setState = function setState(state) {
          if (state != this._currentState) {
            // log("New State:", GameStateToString.toString(state));
            this._currentState = state;
            this.onStateChanged();
          }
        };
        _proto.onStateChanged = function onStateChanged() {
          switch (this._currentState) {
            case GameState.SHOW_LEVEL_WINDOW:
              this.showLevelWindow();
              break;
            case GameState.SHOW_SCORE_WINDOW:
              this.showScoreWindow();
              break;
            case GameState.START_LEVEL:
              this.startLevel();
              break;
            case GameState.CREATE_LEVEL:
              this.createLevel();
              break;
            // case GameState.WAIT_SIMPLE_CLICK:       break;
            // case GameState.WAIT_BOMB_CLICK:         break;
            // case GameState.WAIT_SWAP_CLICK:         break;
            // case GameState.SEARCH_TILES:            break;
            case GameState.REMOVE_SELECTED_TILES:
              this.removeSelectedTiles();
              break;
            case GameState.CHECK_END_GAME:
              this.checkEndGame();
              break;
            case GameState.SPAWN_NEW_TILES:
              this.spawnNewTiles();
              break;
            case GameState.CHECK_NEED_SHUFFLE:
              this.checkNeedShuffle();
              break;
            // case GameState.WAIT_SWAP:               break;
            case GameState.FAIL_GAME:
              this.failGame();
              break;
            case GameState.WIN_LEVEL:
              this.winLevel();
              break;
            case GameState.NO_MOVES:
              this.noMoves();
              break;
            // case GameState.PAUSE:                   break;
          }
        };

        _proto.pause = function pause() {
          var _this2 = this;
          this._isPause = !this._isPause;
          if (this._isPause) {
            this.setState(GameState.PAUSE);
            this._fieldPanelScript.hideWithScale(function () {
              _this2._labelPanelScript.setLebel("Сделали\nперерывчик?", new math.Color(239, 223, 148, 255), 80);
              _this2._labelPanelScript.showWithScale();
            });
          } else {
            this._labelPanelScript.hideWithScale(function () {
              _this2._fieldPanelScript.showWithScale(function () {
                _this2.setState(GameState.WAIT_SIMPLE_CLICK);
              });
            });
          }
        };
        _proto.gotoMainMenu = function gotoMainMenu() {
          var _this3 = this;
          this.screenLoaderPanel.active = true;
          director.preloadScene("MainMenuScene", this.onPorogressLoadScreene, function (error, sceneAsset) {
            var interval = setInterval(function () {
              clearInterval(interval);
              _this3.screenLoaderPanel.active = false;
              director.loadScene("MainMenuScene");
            }, 500);
          });
        };
        _proto.showLevelWindow = function showLevelWindow() {
          var _this4 = this;
          this._currentLevel++;
          // this._currentLevel = 2;

          if (this._currentLevel < this.levels.length) {
            this._currentLevelData = this.levels[this._currentLevel];
            this._levelPanelScript.init(this._currentLevelData, function () {
              _this4.setState(GameState.START_LEVEL);
            });
            this._levelPanelScript.showWithScale();
          } else {
            this._labelPanelScript.setLebel("Игра пройдена", new math.Color(137, 202, 74, 255), 80);
            this._labelPanelScript.showWithScale();
            var interval = setInterval(function () {
              clearInterval(interval);
              _this4._labelPanelScript.hideWithScale(function () {
                _this4.gotoMainMenu();
              });
            }, 1000);
          }
        };
        _proto.showScoreWindow = function showScoreWindow() {
          var _this5 = this;
          this._scorePanelScript.init(this._currentLevel + 1, this._rewardScore, function () {
            _this5.setState(GameState.SHOW_LEVEL_WINDOW);
          }, function () {
            _this5.gotoMainMenu();
          });
          this._scorePanelScript.showWithScale();
        };
        _proto.startLevel = function startLevel() {
          this._movesLeft = this._currentLevelData.moves;
          this._lastDeletedBlocksCount = 0;
          this._rewardMoney = 0;
          this._rewardScore = 0;
          this._maxLevelBlocksProgress = 0;
          this._currentLevelBlocksProgress = 0;
          this._goalsBlock = new Map();
          for (var i = 0; i < this._currentLevelData.goals.length; i++) {
            var type = this._currentLevelData.goals[i].type;
            var quantity = this._currentLevelData.goals[i].quantity;
            this._goalsBlock.set(type, quantity);
            this._maxLevelBlocksProgress += quantity;
          }
          this._currentLevelBlocksProgress = this._maxLevelBlocksProgress;
          this._progressPanelScript.setProgress(0, false);
          this._goalsPanelScript.init(this._currentLevelData);
          this._movesPanelScript.setValue(this._currentLevelData.moves);
          this._fieldPanelScript.init(this._fieldLogic.getFieldSize, this._fieldLogic.getCellSize);
          this._levelScorePanelScript.setValue(0);
          this._moneyPanelScript.setValue(0);
          this._bonusPanelScript.init(this.bonuses);
          this._bonusPanelScript.updateBonuses(this._rewardMoney);
          this._progressPanelScript.showWithMove();
          this._pauseButtonPanelScript.showWithMove();
          this._goalsPanelScript.showWithMove();
          this._movesPanelScript.showWithMove();
          this._fieldPanelScript.showWithScale();
          this._levelScorePanelScript.showWithMove();
          this._moneyPanelScript.showWithMove();
          this._bonusPanelScript.showWithMove();
          this.setState(GameState.CREATE_LEVEL);
        };
        _proto.createLevel = function createLevel() {
          this._currentShuffleTry = 0;
          this._fieldPanelScript.clear();
          this._fieldLogic.initialize();
          this.setState(GameState.WAIT_SIMPLE_CLICK);
        }

        // Проверка рядом стоящих тайлов после клика
        ;

        _proto.simpleClickAction = function simpleClickAction(pos) {
          this._fieldLogic.clearSelectedTiles();
          this._fieldLogic.getSimpleClick(pos);
          this.setState(GameState.REMOVE_SELECTED_TILES);
        };
        _proto.bombClickAction = function bombClickAction(pos) {
          this._fieldLogic.clearSelectedTiles();
          this._fieldLogic.selectCircle(pos);
          this.setState(GameState.REMOVE_SELECTED_TILES);
        };
        _proto.swapClickAction = function swapClickAction(pos) {
          var _this6 = this;
          var clickedTile = this._fieldLogic.getTyleByGridPosition(pos);
          if (clickedTile != null) {
            if (this._swapTile == null)
              // кликнули на первый раз
              {
                this._swapTile = clickedTile;
                this._swapTile.setSelected(true);
              } else if (this._swapTile.pos.equals(clickedTile.pos))
              // кликнули на уже выбранный тайл
              {
                this._swapTile.setSelected(false);
                this._swapTile = null;
              } else {
              var leftNeighbor = this._fieldLogic.grid.getCellNeighbor(this._swapTile.pos, Position.L);
              var topNeighbor = this._fieldLogic.grid.getCellNeighbor(this._swapTile.pos, Position.T);
              var rightNeighbor = this._fieldLogic.grid.getCellNeighbor(this._swapTile.pos, Position.R);
              var bottomNeighbor = this._fieldLogic.grid.getCellNeighbor(this._swapTile.pos, Position.B);
              if (clickedTile.pos.equals(leftNeighbor) || clickedTile.pos.equals(topNeighbor) || clickedTile.pos.equals(rightNeighbor) || clickedTile.pos.equals(bottomNeighbor)) {
                var tempPos = this._swapTile.pos.clone();
                this._swapTile.setSelected(false);
                this._swapTile.pos = clickedTile.pos.clone();
                this._swapTile.updateLabel();
                clickedTile.pos = tempPos;
                clickedTile.updateLabel();
                this.sortTilesAfterSwap();
                this.moveTileToNewPos(this._swapTile, function () {
                  _this6.cancelSwapClickAction();
                });
                this.moveTileToNewPos(clickedTile, function () {
                  _this6.cancelSwapClickAction();
                });
              }
            }
          }
        };
        _proto.sortTilesAfterSwap = function sortTilesAfterSwap() {
          this._fieldLogic.sortTiles();
          for (var i = 0; i < this._fieldLogic.tiles.length; i++) {
            var currentTile = this._fieldLogic.tiles[i];
            currentTile.node.setSiblingIndex(i);
          }
        };
        _proto.moveTileToNewPos = function moveTileToNewPos(tile, callback) {
          var _this7 = this;
          this._startedAnimations++;
          var inScreen = this._fieldLogic.grid.gridToScreen(tile.pos);
          tween(tile.node).to(0.8, {
            position: new Vec3(inScreen.x, inScreen.y, 0)
          }, {
            easing: 'backInOut'
          }).call(function () {
            _this7._startedAnimations--;
            if (_this7._startedAnimations == 0) {
              if (callback) callback();
            }
          }).start();
        };
        _proto.cancelSwapClickAction = function cancelSwapClickAction() {
          this._swapTile = null;
          this.setState(GameState.WAIT_SIMPLE_CLICK);
        };
        _proto.removeSelectedTiles = function removeSelectedTiles() {
          var _this8 = this;
          if (this._fieldLogic.selectedTiles.length >= this._fieldLogic.minBlocksGroup) {
            this._lastDeletedBlocksCount = this._fieldLogic.selectedTiles.length;
            var _loop = function _loop() {
              var currentTile = _this8._fieldLogic.selectedTiles[i];
              if (_this8._goalsBlock.has(currentTile.type)) {
                var blockCount = _this8._goalsBlock.get(currentTile.type);
                if (blockCount > 0) {
                  _this8._goalsBlock.set(currentTile.type, blockCount - 1);
                  _this8._currentLevelBlocksProgress--;
                }
              }
              _this8._fieldLogic.tiles.splice(_this8._fieldLogic.tiles.indexOf(currentTile), 1);
              _this8._startedAnimations++;
              var tileCenterPos = _this8._fieldLogic.grid.gridToScreen(currentTile.pos);
              tileCenterPos.add(_this8._fieldLogic.cell.center);
              var burnTween = tween;
              burnTween(currentTile.node).parallel(burnTween().to(0.2, {
                scale: new Vec3(0, 0, 1)
              }, {
                easing: 'backIn'
              }), burnTween().to(0.2, {
                position: new Vec3(tileCenterPos.x, tileCenterPos.y, 0)
              }, {
                easing: 'backIn'
              })).call(function () {
                _this8._startedAnimations--;
                _this8._fieldPanelScript.remove(currentTile.node);
                if (_this8._startedAnimations == 0) {
                  _this8.setState(GameState.CHECK_END_GAME);
                }
              }).start();
            };
            for (var i = 0; i < this._fieldLogic.selectedTiles.length; i++) {
              _loop();
            }
          } else {
            this.setState(GameState.WAIT_SIMPLE_CLICK);
          }
          this._fieldLogic.clearSelectedTiles();
        };
        _proto.checkEndGame = function checkEndGame() {
          this._movesLeft--;
          this._movesPanelScript.setValue(this._movesLeft);
          for (var i = 0; i < this.revardsMoney.length; i++) {
            if (RangeVerifier.verify(this._lastDeletedBlocksCount, this.revardsMoney[i])) {
              this._rewardMoney += this.revardsMoney[i].reward;
              this._moneyPanelScript.setValue(this._rewardMoney);
              this._bonusPanelScript.updateBonuses(this._rewardMoney);
            }
          }
          for (var _i = 0; _i < this.revardsScore.length; _i++) {
            if (RangeVerifier.verify(this._lastDeletedBlocksCount, this.revardsScore[_i])) {
              this._rewardScore += this.revardsScore[_i].reward;
              this._levelScorePanelScript.setValue(this._rewardScore);
            }
          }
          this._goalsPanelScript.updateValues(this._goalsBlock);
          this._progressPanelScript.setProgress(100 - this._currentLevelBlocksProgress * 100 / this._maxLevelBlocksProgress, true);
          if (this._movesLeft == 0 && this._currentLevelBlocksProgress > 0) {
            this.setState(GameState.FAIL_GAME);
          } else if (this._currentLevelBlocksProgress == 0) {
            // INFO: ПОБЕДА
            this.setState(GameState.WIN_LEVEL);
          } else {
            this.setState(GameState.SPAWN_NEW_TILES);
          }
        };
        _proto.spawnNewTiles = function spawnNewTiles() {
          var _this9 = this;
          this._fieldLogic.spawnNewTiles();
          for (var i = 0; i < this._fieldLogic.selectedTiles.length; i++) {
            // linear | bounceOut
            var currentTile = this._fieldLogic.selectedTiles[i];
            var inScreen = this._fieldLogic.grid.gridToScreen(currentTile.pos);
            var distance = Math.max(Math.abs(currentTile.node.getPosition().x - inScreen.x), Math.abs(currentTile.node.getPosition().y - inScreen.y));
            var moveSpeed = 700;
            var duration = distance / moveSpeed;
            tween(currentTile.node).to(duration, {
              position: new Vec3(inScreen.x, inScreen.y, 0)
            }, {
              easing: 'linear'
            }).to(0.1, {
              position: new Vec3(inScreen.x, inScreen.y + 3, 0)
            }, {
              easing: 'linear'
            }).to(0.1, {
              position: new Vec3(inScreen.x, inScreen.y, 0)
            }, {
              easing: 'linear'
            }).call(function () {
              _this9._fieldLogic.selectedTiles.splice(0, 1);
              if (_this9._fieldLogic.selectedTiles.length == 0) {
                _this9.setState(GameState.CHECK_NEED_SHUFFLE);
              }
            }).start();
          }
        };
        _proto.checkNeedShuffle = function checkNeedShuffle() {
          var _this10 = this;
          if (this._fieldLogic.checkNeedShuffle()) {
            if (this._currentShuffleTry == this._fieldLogic.maxShuffleTry) {
              // INFO: ЗАКОНЧИЛИСЬ ПОПЫТКИ ПЕРЕМЕШИВАНИЯ. ИГРА ОКОНЧЕНА.
              this.setState(GameState.NO_MOVES);
            } else {
              // INFO: НЕТ ХОДОВ
              this._labelPanelScript.setLebel("Нет ходов", new math.Color(218, 56, 84, 255), 80);
              this._labelPanelScript.showWithScale();
              var interval = setInterval(function () {
                clearInterval(interval);
                _this10._labelPanelScript.hideWithScale(function () {
                  _this10._currentShuffleTry++;
                  _this10.shuffle();
                });
              }, 800);
            }
          } else {
            this.setState(GameState.WAIT_SIMPLE_CLICK);
          }
        };
        _proto.shuffle = function shuffle() {
          var _this11 = this;
          this._labelPanelScript.setLebel("Тасуем", new math.Color(239, 223, 148, 255), 80);
          this._labelPanelScript.showWithScale();
          var interval = setInterval(function () {
            clearInterval(interval);
            _this11._fieldLogic.shuffle();
            for (var i = 0; i < _this11._fieldLogic.tiles.length; i++) {
              _this11._startedAnimations++;
              var currentTile = _this11._fieldLogic.tiles[i];
              currentTile.node.setSiblingIndex(i);
              var inScreen = _this11._fieldLogic.grid.gridToScreen(currentTile.pos);
              tween(currentTile.node).to(0.8, {
                position: new Vec3(inScreen.x, inScreen.y, 0)
              }, {
                easing: 'backInOut'
              }).call(function () {
                _this11._startedAnimations--;
                if (_this11._startedAnimations == 0) {
                  _this11._labelPanelScript.hideWithScale(function () {
                    _this11.checkNeedShuffle();
                  });
                }
              }).start();
            }
          }, 100);
        };
        _proto.failGame = function failGame() {
          var _this12 = this;
          this._currentLevel--;
          this._labelPanelScript.setLebel("Эх, Ещё бы чуть-чуть", new math.Color(220, 59, 87, 255), 80);
          this._labelPanelScript.showWithScale();
          var interval = setInterval(function () {
            clearInterval(interval);
            _this12.hideAllPanelsAndShowScoreWindow();
          }, 1000);
        };
        _proto.winLevel = function winLevel() {
          var _this13 = this;
          this._labelPanelScript.setLebel("Победа", new math.Color(137, 202, 74, 255), 80);
          this._labelPanelScript.showWithScale();
          var interval = setInterval(function () {
            clearInterval(interval);
            _this13.hideAllPanelsAndShowScoreWindow();
          }, 1000);
        };
        _proto.noMoves = function noMoves() {
          var _this14 = this;
          this._currentLevel--;
          this._labelPanelScript.setLebel("Увы, больше\nходов нет", new math.Color(83, 176, 246, 255), 80);
          this._labelPanelScript.showWithScale();
          var interval = setInterval(function () {
            clearInterval(interval);
            _this14._labelPanelScript.hideWithScale(function () {
              _this14._labelPanelScript.setLebel("конец игры", new math.Color(220, 59, 87, 255), 80);
              _this14._labelPanelScript.showWithScale();
              var interval = setInterval(function () {
                clearInterval(interval);
                _this14.hideAllPanelsAndShowScoreWindow();
              }, 1000);
            });
          }, 1000);
        };
        _proto.hideAllPanelsAndShowScoreWindow = function hideAllPanelsAndShowScoreWindow() {
          var _this15 = this;
          this._labelPanelScript.hideWithScale(function () {
            _this15._progressPanelScript.hideWithMove();
            _this15._pauseButtonPanelScript.hideWithMove();
            _this15._goalsPanelScript.hideWithMove();
            _this15._movesPanelScript.hideWithMove();
            _this15._fieldPanelScript.hideWithScale();
            _this15._levelScorePanelScript.hideWithMove();
            _this15._bonusPanelScript.hideWithMove();
            _this15._moneyPanelScript.hideWithMove(function () {
              _this15.setState(GameState.SHOW_SCORE_WINDOW);
            });
          });
        };
        _proto.bonusButtonPressed = function bonusButtonPressed(bonusItem) {
          switch (bonusItem.type) {
            case BonusType.BOMB:
              {
                this._rewardMoney -= bonusItem.price;
                this._moneyPanelScript.setValue(this._rewardMoney);
                this._bonusPanelScript.updateBonuses(this._rewardMoney);
                this.setState(GameState.WAIT_BOMB_CLICK);
                break;
              }
            case BonusType.SWAP:
              {
                this._rewardMoney -= bonusItem.price;
                this._moneyPanelScript.setValue(this._rewardMoney);
                this._bonusPanelScript.updateBonuses(this._rewardMoney);
                this.setState(GameState.WAIT_SWAP_CLICK);
                break;
              }
          }
        };
        _proto.onMouseDown = function onMouseDown(event) {
          if (this._currentState != GameState.WAIT_SIMPLE_CLICK && this._currentState != GameState.WAIT_BOMB_CLICK && this._currentState != GameState.WAIT_SWAP_CLICK) return;
          var screenPoint3D = this._fieldPanelScript.getContentXY(new Vec3(event.getLocationX(), event.getLocationY(), 0));
          var screenPoint2D = new Vec2(screenPoint3D.x, screenPoint3D.y);
          var inGrid = this._fieldLogic.grid.screenToGrid(screenPoint2D);
          if (inGrid[0] == Position.IN && this._fieldLogic.shapeRectangle.isInShape(inGrid[1])) {
            // log("==== >>> In Griid <<< ====");

            if (event.getButton() == 0) {
              switch (this._currentState) {
                case GameState.WAIT_SIMPLE_CLICK:
                  this.simpleClickAction(inGrid[1]);
                  break;
                case GameState.WAIT_BOMB_CLICK:
                  this.bombClickAction(inGrid[1]);
                  break;
                case GameState.WAIT_SWAP_CLICK:
                  this.swapClickAction(inGrid[1]);
                  break;
              }
            }
          }

          // INFO: средняя кнопка мыши тестовое перемешивание
          if (event.getButton() == 1) {
            this.shuffle();
          }

          // INFO: правая кнопка мыши тестовое пересоздание уровня без сброса прогресса
          if (event.getButton() == 2) {
            this.setState(GameState.CREATE_LEVEL);
          }
        };
        _proto.onMouseMove = function onMouseMove(event) {
          if (this._currentState != GameState.WAIT_BOMB_CLICK) return;
          var screenPoint3D = this._fieldPanelScript.getContentXY(new Vec3(event.getLocationX(), event.getLocationY(), 0));
          var screenPoint2D = new Vec2(screenPoint3D.x, screenPoint3D.y);
          var inGrid = this._fieldLogic.grid.screenToGrid(screenPoint2D);
          if (inGrid[0] == Position.IN && this._fieldLogic.shapeRectangle.isInShape(inGrid[1])) {
            this.selectTiles(false);
            this._fieldLogic.clearSelectedTiles();
            this._fieldLogic.selectCircle(inGrid[1]);
            this.selectTiles(true);
          } else {
            this.selectTiles(false);
            this._fieldLogic.clearSelectedTiles();
          }
        };
        _proto.selectTiles = function selectTiles(select) {
          for (var i = 0; i < this._fieldLogic.selectedTiles.length; i++) {
            var currentTile = this._fieldLogic.selectedTiles[i];
            currentTile.setSelected(select);
          }
        };
        return GameScript;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fieldPanel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scorePanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pausePanel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "goalsPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mavesPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labelPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "moneyPanel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "levelScorePanel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bonusPanel", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "screenLoaderPanel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "blo\u0441kPrefabs", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "levels", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "revardsMoney", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "revardsScore", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "bonuses", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Goal.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "eee6dNBd9VBu7osSilwp4lw", "Goal", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Goal = exports('Goal', (_dec = ccclass('Goal'), _dec(_class = (_class2 = function Goal() {
        _initializerDefineProperty(this, "type", _descriptor, this);
        _initializerDefineProperty(this, "quantity", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "quantity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GoalBlockScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlocksPrefabs.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, UITransform, Vec3, Component, BlocksPrefabs;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      BlocksPrefabs = module.BlocksPrefabs;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "394dcJ39TdDaIZ7nFBqgClo", "GoalBlockScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GoalBlockScript = exports('GoalBlockScript', (_dec = ccclass('GoalBlockScript'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoalBlockScript, _Component);
        function GoalBlockScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "block", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GoalBlockScript.prototype;
        _proto.setGoal = function setGoal(goal) {
          this.label.string = goal.quantity.toString();
          var block = instantiate(BlocksPrefabs.getBlockPrefabByType(goal.type));
          var uiTransform = block.getComponent(UITransform);
          block.setPosition(new Vec3(-uiTransform.width / 2, 0, 0));
          this.block.addChild(block);
        };
        return GoalBlockScript;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "block", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GoalItemScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlocksPrefabs.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, instantiate, Vec3, UITransform, Component, BlocksPrefabs;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      instantiate = module.instantiate;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      BlocksPrefabs = module.BlocksPrefabs;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9a6a1sx5eRL7LtCEGdqC5aP", "GoalItemScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GoalItemScript = exports('GoalItemScript', (_dec = ccclass('GoalItemScript'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoalItemScript, _Component);
        function GoalItemScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "block", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2, _assertThisInitialized(_this));
          _this._goal = void 0;
          return _this;
        }
        var _proto = GoalItemScript.prototype;
        _proto.setGoal = function setGoal(goal) {
          this._goal = goal;
          this.setValue(goal.quantity);
          var block = instantiate(BlocksPrefabs.getBlockPrefabByType(goal.type));
          block.setScale(new Vec3(0.4, 0.4, 1));
          var uiTransform = block.getComponent(UITransform);
          block.setPosition(new Vec3(-uiTransform.width / 2 * 0.4, -uiTransform.height / 2 * 0.4, 0));
          this.block.addChild(block);
        };
        _proto.getGoalType = function getGoalType() {
          return this._goal.type;
        };
        _proto.setValue = function setValue(value) {
          this.label.string = value.toString();
        };
        return GoalItemScript;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "block", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Goals.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Goal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Goal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Goal = module.Goal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "00f7ddAyQtMAJ9xd/iWBY4v", "Goals", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Goals = exports('Goals', (_dec = ccclass('Goals'), _dec2 = property([Goal]), _dec(_class = (_class2 = function Goals() {
        _initializerDefineProperty(this, "level", _descriptor, this);
        _initializerDefineProperty(this, "levelGoals", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "level", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelGoals", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GoalsPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GoalItemScript.ts', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, GoalItemScript, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      GoalItemScript = module.GoalItemScript;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "59288KUgNRGn6FMXW9cr/KC", "GoalsPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GoalsPanelScript = exports('GoalsPanelScript', (_dec = ccclass('GoalsPanelScript'), _dec2 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(GoalsPanelScript, _HiddenPanel);
        function GoalsPanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "goalPrefab", _descriptor, _assertThisInitialized(_this));
          _this._goalsItemsScripts = new Array();
          return _this;
        }
        var _proto = GoalsPanelScript.prototype;
        _proto.init = function init(level) {
          this._goalsItemsScripts = new Array();
          this.node.removeAllChildren();
          for (var i = 0; i < level.goals.length; i++) {
            var goalItem = instantiate(this.goalPrefab);
            var goalItemScript = goalItem.getComponent(GoalItemScript);
            goalItemScript.setGoal(level.goals[i]);
            this._goalsItemsScripts.push(goalItemScript);
            var goalItemPos = goalItem.getPosition();
            goalItemPos.y = -(120 * i);
            goalItem.setPosition(goalItemPos);
            this.node.addChild(goalItem);
          }
        };
        _proto.updateValues = function updateValues(goals) {
          for (var i = 0; i < this._goalsItemsScripts.length; i++) {
            if (goals.has(this._goalsItemsScripts[i].getGoalType())) {
              this._goalsItemsScripts[i].setValue(goals.get(this._goalsItemsScripts[i].getGoalType()));
            }
          }
        };
        return GoalsPanelScript;
      }(HiddenPanel), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "goalPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Grid.ts", ['cc', './Enumerations.ts', './Edge.ts'], function (exports) {
  var cclegacy, _decorator, Vec2, CellType, Position, Edge;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }, function (module) {
      CellType = module.CellType;
      Position = module.Position;
    }, function (module) {
      Edge = module.Edge;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "700dbPH0TNCQbmbRAoOYbc/", "Grid", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Grid = exports('Grid', (_dec = ccclass('Grid'), _dec(_class = /*#__PURE__*/function () {
        function Grid(cell, originPosition, gap) {
          this._cell = void 0;
          this._originPosition = void 0;
          this._gap = void 0;
          this.neighbors = new Map();
          this.diagonals = new Map();
          this.neighborsShifted = new Map();
          this.diagonalsShifted = new Map();
          this._position = void 0;
          this._tempPoint = new Vec2();
          this._tempEdge = new Edge();
          this._tempOvalHit = void 0;
          this._cell = cell;
          this._originPosition = originPosition;
          this._gap = gap;
        }
        var _proto = Grid.prototype;
        _proto.initialize = function initialize() {
          this.setNeighbors();
          this.calculateGridSpecificPrameters();
          // SetIntersectionEdges();
        };

        _proto.isPointInside = function isPointInside(screenPoint, gridToScreenPoint, defineQuadrant) {
          if (defineQuadrant === void 0) {
            defineQuadrant = false;
          }
          if (this._cell.type == CellType.OVAL) {
            return this.checkOval(screenPoint, gridToScreenPoint, defineQuadrant);
          } else {
            return this.checkEdges(screenPoint, gridToScreenPoint);
          }
        };
        _proto.defineQuadrant = function defineQuadrant(screenPoint, centerPoint) {
          if (screenPoint.x <= centerPoint.x) {
            return screenPoint.y >= centerPoint.y ? Position.LT : Position.LB;
          } else {
            return screenPoint.y >= centerPoint.y ? Position.RT : Position.RB;
          }
        };
        _proto.checkOval = function checkOval(screenPoint, gridToScreenPoint, defineQuadrant) {
          if (defineQuadrant === void 0) {
            defineQuadrant = false;
          }
          this._tempPoint.x = this._cell.center.x;
          this._tempPoint.y = this._cell.center.y;
          this._tempPoint.add(gridToScreenPoint);
          this._tempOvalHit = Math.pow(screenPoint.x - this._tempPoint.x, 2) / Math.pow(this._cell.halfWidth, 2) + Math.pow(screenPoint.y - this._tempPoint.y, 2) / Math.pow(this._cell.halfHeight, 2);
          if (this._tempOvalHit > 1)
            // _tempOvalHit > 1 находимся за эллипсом
            {
              return defineQuadrant ? this.defineQuadrant(screenPoint, this._tempPoint) : Position.OUT;
            } else if (this._tempOvalHit <= 1)
            // _tempOvalHit == 1 находимся на краю эллипса _tempOvalHit < 1 находимся внутри эллипса
            {
              return Position.IN;
            } else {
            return defineQuadrant ? this.defineQuadrant(screenPoint, this._tempPoint) : Position.OUT;
          }
        };
        _proto.checkEdges = function checkEdges(screenPoint, gridToScreenPoint) {
          var _this = this;
          /*for (let [key, value] of map) {
              console.log(key, value.toString());
          }*/

          this._cell.getEdges().forEach(function (value, key) {
            // console.log(PositionToString.toString(key), value.toString());
            _this._tempEdge.set(value);
            _this._tempEdge.add(gridToScreenPoint);
            // console.log(this._tempEdge.pointToEdgeDistance(screenPoint), gridToScreenPoint.toString());
            if (_this._tempEdge.pointToEdgeDistance(screenPoint) < 0) return key;
          });
          return Position.IN;
        };
        _proto.getNeighbor = function getNeighbor(gridCell, direction) {
          var resultCell = gridCell.clone();
          if (this.neighbors.has(direction)) {
            return resultCell.add(this.neighbors.get(direction));
          } else {
            return null;
          }
        };
        _proto.getNeighborShifted = function getNeighborShifted(gridCell, direction, notFromShifted) {
          var resultCell = gridCell.clone();
          if (notFromShifted) {
            return resultCell.add(this.neighbors.get(direction));
          } else {
            return resultCell.add(this.neighborsShifted.get(direction));
          }
        };
        _proto.getNeighborShiftedByX = function getNeighborShiftedByX(gridCell, direction) {
          return this.getNeighborShifted(gridCell, direction, gridCell.x % 2 == 0);
        };
        _proto.getNeighborShiftedByY = function getNeighborShiftedByY(gridCell, direction) {
          return this.getNeighborShifted(gridCell, direction, gridCell.y % 2 == 0);
        };
        _proto.getNeighbors = function getNeighbors(gridCell) {
          return this.neighbors;
        };
        _proto.getNeighborsShifted = function getNeighborsShifted(notFromShifted) {
          if (notFromShifted) {
            return this.neighbors;
          } else {
            return this.neighborsShifted;
          }
        };
        _proto.getNeighborsShiftedByX = function getNeighborsShiftedByX(gridCell) {
          return this.getNeighborsShifted(gridCell.x % 2 == 0);
        };
        _proto.getNeighborsShiftedByY = function getNeighborsShiftedByY(gridCell) {
          return this.getNeighborsShifted(gridCell.y % 2 == 0);
        };
        return Grid;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HiddenPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0b6abEec/tKNKOBIo3f9bmq", "HiddenPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var HiddenPanel = exports('HiddenPanel', (_dec = ccclass('HiddenPanel'), _dec2 = property({
        group: {
          name: 'position',
          id: '0',
          displayOrder: 1
        },
        type: Vec3,
        tooltip: "Позиция в которую будет перемешена панель"
      }), _dec3 = property({
        group: {
          name: 'position',
          id: '0',
          displayOrder: 1
        },
        type: Vec3
      }), _dec4 = property({
        group: {
          name: 'scale',
          id: '0',
          displayOrder: 2
        },
        type: Vec3
      }), _dec5 = property({
        group: {
          name: 'scale',
          id: '0',
          displayOrder: 2
        },
        type: Vec3
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HiddenPanel, _Component);
        function HiddenPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "showPosition", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hidePosition", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showScale", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideScale", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HiddenPanel.prototype;
        // linear | bounceOut | backOut 
        _proto.showWithScale = function showWithScale(callback) {
          this.node.active = true;
          this.node.setScale(this.hideScale);
          this.node.setPosition(this.showPosition);
          tween(this.node).to(0.4, {
            scale: this.showScale
          }, {
            easing: 'backOut'
          }).call(function () {
            if (callback) callback();
          }).start();
        };
        _proto.hideWithScale = function hideWithScale(callback) {
          var _this2 = this;
          tween(this.node).to(0.4, {
            scale: this.hideScale
          }, {
            easing: 'backIn'
          }).call(function () {
            _this2.node.active = false;
            if (callback) callback();
          }).start();
        };
        _proto.showWithMove = function showWithMove(callback) {
          this.node.active = true;
          this.node.setScale(this.showScale);
          this.node.setPosition(this.hidePosition);
          tween(this.node).to(0.4, {
            position: this.showPosition
          }, {
            easing: 'backOut'
          }).call(function () {
            if (callback) callback();
          }).start();
        };
        _proto.hideWithMove = function hideWithMove(callback) {
          var _this3 = this;
          tween(this.node).to(0.4, {
            position: this.hidePosition
          }, {
            easing: 'backIn'
          }).call(function () {
            _this3.node.active = false;
            if (callback) callback();
          }).start();
        };
        return HiddenPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showPosition", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hidePosition", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "showScale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 1, 1);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hideScale", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 0, 1);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LabelPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, math, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      math = module.math;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "0f93eBw65ZEBIFfEneDpbNH", "LabelPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LabelPanelScript = exports('LabelPanelScript', (_dec = ccclass('LabelPanelScript'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(LabelPanelScript, _HiddenPanel);
        function LabelPanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LabelPanelScript.prototype;
        _proto.setLebel = function setLebel(value, color, fontSize) {
          this.label.string = value;
          this.label.fontSize = fontSize ? fontSize : 120;
          this.label.color = color ? color : new math.Color(255, 255, 255, 255);
        };
        return LabelPanelScript;
      }(HiddenPanel), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Level.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Goal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, Goal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      Goal = module.Goal;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "03bb4hoj85CVYD5ByOvwCUA", "Level", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Level = exports('Level', (_dec = ccclass('Level'), _dec2 = property([Goal]), _dec(_class = (_class2 = function Level() {
        _initializerDefineProperty(this, "label", _descriptor, this);
        _initializerDefineProperty(this, "moves", _descriptor2, this);
        _initializerDefineProperty(this, "goals", _descriptor3, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moves", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goals", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GoalBlockScript.ts', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Label, Node, instantiate, GoalBlockScript, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Label = module.Label;
      Node = module.Node;
      instantiate = module.instantiate;
    }, function (module) {
      GoalBlockScript = module.GoalBlockScript;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1781aeMokxJ3Zki/BJFphgQ", "LevelPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelPanelScript = exports('LevelPanelScript', (_dec = ccclass('LevelPanelScript'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(LevelPanelScript, _HiddenPanel);
        function LevelPanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "goalPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelLevel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goals", _descriptor3, _assertThisInitialized(_this));
          _this._hideCallback = void 0;
          return _this;
        }
        var _proto = LevelPanelScript.prototype;
        _proto.init = function init(level, hideCallback) {
          this._hideCallback = hideCallback;
          this.labelLevel.string = level.label.toString();
          this.goals.removeAllChildren();
          for (var i = 0; i < level.goals.length; i++) {
            var goal = instantiate(this.goalPrefab);
            var goalPos = goal.getPosition();
            goalPos.x = 180 * i - (level.goals.length - 1) * 180 / 2;
            goal.setPosition(goalPos);
            var goalScript = goal.getComponent(GoalBlockScript);
            goalScript.setGoal(level.goals[i]);
            this.goals.addChild(goal);
          }
        };
        _proto.hide = function hide() {
          this.hideWithScale(this._hideCallback);
        };
        return LevelPanelScript;
      }(HiddenPanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goalPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goals", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelScorePanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "773fcAPKIpNCIw4L9+arOv7", "LevelScorePanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LevelScorePanelScript = exports('LevelScorePanelScript', (_dec = ccclass('LevelScorePanelScript'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(LevelScorePanelScript, _HiddenPanel);
        function LevelScorePanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LevelScorePanelScript.prototype;
        _proto.setValue = function setValue(value) {
          this.label.string = value.toString();
        };
        return LevelScorePanelScript;
      }(HiddenPanel), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './BlocksPrefabs.ts', './BonusItem.ts', './FieldLogic.ts', './GameEnumerations.ts', './GameScript.ts', './Goal.ts', './Goals.ts', './Cell.ts', './CellFromRectangle.ts', './Edge.ts', './Enumerations.ts', './Grid.ts', './RectangleGrid.ts', './Shape.ts', './ShapeBuilder.ts', './Level.ts', './RangeValue.ts', './RangeVerifier.ts', './Tile.ts', './BonusItemScript.ts', './BonusPanelScript.ts', './FieldPanelScript.ts', './GoalBlockScript.ts', './GoalItemScript.ts', './GoalsPanelScript.ts', './HiddenPanel.ts', './LabelPanelScript.ts', './LevelPanelScript.ts', './LevelScorePanelScript.ts', './MainMenuScript.ts', './MoneyPanelScript.ts', './MovesPanelScript.ts', './PauseButtonPanelScript.ts', './ProgressPanelScript.ts', './ScorePanelScript.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainMenuScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ProgressBar, Vec3, tween, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      ProgressBar = module.ProgressBar;
      Vec3 = module.Vec3;
      tween = module.tween;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "15db92rGiJP26Akk78cqc6I", "MainMenuScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainMenuScript = exports('MainMenuScript', (_dec = ccclass('MainMenuScript'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ProgressBar), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainMenuScript, _Component);
        function MainMenuScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainMenuLogo", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainMenuPanel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "screenLoaderPanel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor4, _assertThisInitialized(_this));
          _this.onPorogressLoadScreene = function (completedCount, totalCount, iten) {
            _this.progressBar.progress = completedCount / totalCount;
          };
          return _this;
        }
        var _proto = MainMenuScript.prototype;
        _proto.start = function start() {
          var logoOldPos = this.mainMenuLogo.getPosition().clone();
          this.mainMenuLogo.setScale(new Vec3(1, 1, 1));
          this.mainMenuLogo.setPosition(this.mainMenuLogo.getPosition().add(new Vec3(0, 200, 0)));
          tween(this.mainMenuLogo).to(0.4, {
            position: logoOldPos
          }, {
            easing: 'backOut'
          }).call(function () {}).start();
          this.mainMenuPanel.setScale(new Vec3());
          tween(this.mainMenuPanel).to(0.4, {
            scale: new Vec3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).call(function () {}).start();
        };
        _proto.startGame = function startGame() {
          var _this2 = this;
          tween(this.mainMenuLogo).to(0.4, {
            scale: new Vec3(0, 0, 1)
          }, {
            easing: 'backIn'
          }).call(function () {}).start();
          tween(this.mainMenuPanel).to(0.4, {
            scale: new Vec3(0, 0, 1)
          }, {
            easing: 'backIn'
          }).call(function () {
            _this2.screenLoaderPanel.active = true;
            _this2.progressBar.progress = 0.0;
            director.preloadScene("InGameScene", _this2.onPorogressLoadScreene, function (error, sceneAsset) {
              var interval = setInterval(function () {
                clearInterval(interval);
                _this2.screenLoaderPanel.active = false;
                director.loadScene("InGameScene");
              }, 500);
            });
          }).start();
        };
        return MainMenuScript;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainMenuLogo", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainMenuPanel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "screenLoaderPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MoneyPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e7fcdQI/X1LK4EypXeKNgSX", "MoneyPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MoneyPanelScript = exports('MoneyPanelScript', (_dec = ccclass('MoneyPanelScript'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(MoneyPanelScript, _HiddenPanel);
        function MoneyPanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MoneyPanelScript.prototype;
        _proto.setValue = function setValue(value) {
          this.label.string = value.toString();
        };
        return MoneyPanelScript;
      }(HiddenPanel), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MovesPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a346dZQtlpBQZfpNmD8t2l+", "MovesPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MovesPaneScript = exports('MovesPaneScript', (_dec = ccclass('MovesPaneScript'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(MovesPaneScript, _HiddenPanel);
        function MovesPaneScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MovesPaneScript.prototype;
        _proto.setValue = function setValue(value) {
          this.label.string = value.toString();
        };
        return MovesPaneScript;
      }(HiddenPanel), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PauseButtonPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, HiddenPanel;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "6e6d5wEFClPe5AMaBn2Jhrw", "PauseButtonPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PauseButtonPanelScript = exports('PauseButtonPanelScript', (_dec = ccclass('PauseButtonPanelScript'), _dec(_class = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(PauseButtonPanelScript, _HiddenPanel);
        function PauseButtonPanelScript() {
          return _HiddenPanel.apply(this, arguments) || this;
        }
        return PauseButtonPanelScript;
      }(HiddenPanel)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ProgressPanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, UITransform, tween, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      tween = module.tween;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "bd7c4nTtjdEnoxhBN+4ljyV", "ProgressPanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ProgressPanelScript = exports('ProgressPanelScript', (_dec = ccclass('ProgressPanelScript'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(ProgressPanelScript, _HiddenPanel);
        function ProgressPanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "progressNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tweenSpeed", _descriptor2, _assertThisInitialized(_this));
          _this._tween = void 0;
          _this._progressVec = new Vec3();
          _this._progress = 0;
          _this._tweenDuration = 1;
          return _this;
        }
        var _proto = ProgressPanelScript.prototype;
        _proto.setProgress = function setProgress(value, animate) {
          var uiTransform = this.progressNode.getComponent(UITransform);
          var barWidth = uiTransform.contentSize.width;
          this._progress = value > 100 ? 100 : value;
          this._progressVec.x = barWidth * this._progress / 100 - barWidth / 2;
          this._tweenDuration = (this._progressVec.x - this.progressNode.getPosition().x) / this.tweenSpeed;
          if (animate) {
            if (this._tween) this._tween.stop();
            this._tween = tween(this.progressNode).to(this._tweenDuration, {
              position: new Vec3(this._progressVec)
            }, {
              easing: 'linear'
            }).call(function () {}).start();
          } else {
            this.progressNode.setPosition(this._progressVec);
          }
        };
        _proto.getProgress = function getProgress() {
          return this._progress;
        };
        return ProgressPanelScript;
      }(HiddenPanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tweenSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RangeValue.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0658400ZYlJMJSlUWhRUk1d", "RangeValue", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RangeValue = exports('RangeValue', (_dec = ccclass('RangeValue'), _dec(_class = (_class2 = function RangeValue() {
        _initializerDefineProperty(this, "min", _descriptor, this);
        _initializerDefineProperty(this, "max", _descriptor2, this);
        _initializerDefineProperty(this, "trueIfMoreMax", _descriptor3, this);
        _initializerDefineProperty(this, "reward", _descriptor4, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "min", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "max", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "trueIfMoreMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "reward", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RangeVerifier.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "05b144CqHVBia8XlvxBCH0b", "RangeVerifier", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RangeVerifier = exports('RangeVerifier', (_dec = ccclass('RangeVerifier'), _dec(_class = /*#__PURE__*/function () {
        function RangeVerifier() {}
        RangeVerifier.verify = function verify(value, range) {
          if (range.trueIfMoreMax && value >= range.max || value >= range.min && value <= range.max) return true;
          return false;
        };
        return RangeVerifier;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RectangleGrid.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Grid.ts', './Enumerations.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Vec2, Grid, Position;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }, function (module) {
      Grid = module.Grid;
    }, function (module) {
      Position = module.Position;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7b53ci+OeVHiJ4fg8PSsMJB", "RectangleGrid", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RectangleGrid = exports('RectangleGrid', (_dec = ccclass('RectangleGrid'), _dec(_class = /*#__PURE__*/function (_Grid) {
        _inheritsLoose(RectangleGrid, _Grid);
        function RectangleGrid(cell, originPosition, gap) {
          var _this;
          _this = _Grid.call(this, cell, originPosition, gap) || this;
          _this.initialize();
          return _this;
        }
        var _proto = RectangleGrid.prototype;
        _proto.gridToScreen = function gridToScreen(gridPoint) {
          var resultPoint = new Vec2();
          resultPoint.x = this._originPosition.x + gridPoint.x * (this._cell.width + this._gap.x);
          resultPoint.y = this._originPosition.y + gridPoint.y * (this._cell.height + this._gap.y);
          return resultPoint;
        };
        _proto.screenToGrid = function screenToGrid(screenPoint) {
          var resultPoint = new Vec2();
          resultPoint.x = Math.floor((screenPoint.x - this._originPosition.x) / (this._cell.width + this._gap.x));
          resultPoint.y = Math.floor((screenPoint.y - this._originPosition.y) / (this._cell.height + this._gap.y));
          this._position = this.isPointInside(screenPoint, this.gridToScreen(resultPoint));
          // console.log("_position", this._position);
          switch (this._position) {
            case Position.IN:
              {
                return [Position.IN, resultPoint];
              }
            case Position.OUT:
            default:
              {
                return [Position.OUT, null];
              }
          }
        };
        _proto.setNeighbors = function setNeighbors() {
          this.neighbors.set(Position.L, new Vec2(-1, 0));
          this.neighbors.set(Position.T, new Vec2(0, 1));
          this.neighbors.set(Position.R, new Vec2(1, 0));
          this.neighbors.set(Position.B, new Vec2(0, -1));
          this.diagonals.set(Position.LB, new Vec2(-1, -1));
          this.diagonals.set(Position.LT, new Vec2(-1, 1));
          this.diagonals.set(Position.RT, new Vec2(1, 1));
          this.diagonals.set(Position.RB, new Vec2(1, -1));
        };
        _proto.calculateGridSpecificPrameters = function calculateGridSpecificPrameters() {};
        _proto.getCellNeighbor = function getCellNeighbor(gridCell, direction) {
          return this.getNeighbor(gridCell, direction);
        };
        _proto.getCellNeighbors = function getCellNeighbors(gridCell) {
          return this.getNeighbors(gridCell);
        };
        return RectangleGrid;
      }(Grid)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScorePanelScript.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HiddenPanel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, HiddenPanel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      HiddenPanel = module.HiddenPanel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "339682Evz9JSYB8+HRKOJ+z", "ScorePanelScript", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ScorePanelScript = exports('ScorePanelScript', (_dec = ccclass('ScorePanelScript'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_HiddenPanel) {
        _inheritsLoose(ScorePanelScript, _HiddenPanel);
        function ScorePanelScript() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _HiddenPanel.call.apply(_HiddenPanel, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "labelLevel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelScore", _descriptor2, _assertThisInitialized(_this));
          _this._nextCallback = null;
          _this._menuCallback = null;
          return _this;
        }
        var _proto = ScorePanelScript.prototype;
        _proto.init = function init(level, score, nextCallback, menuCallback) {
          this._nextCallback = nextCallback;
          this._menuCallback = menuCallback;
          this.labelLevel.string = level.toString();
          this.labelScore.string = score.toString();
        };
        _proto.onNextClick = function onNextClick() {
          this.hideWithScale(this._nextCallback);
        };
        _proto.onMenuClick = function onMenuClick() {
          this.hideWithScale(this._menuCallback);
        };
        return ScorePanelScript;
      }(HiddenPanel), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelLevel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelScore", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Shape.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, _decorator, Vec2;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "02da3ElZ+dMiIwzD/ylVuf6", "Shape", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Shape = exports('Shape', (_dec = ccclass('Shape'), _dec(_class = /*#__PURE__*/function () {
        function Shape() {
          this._positions = new Array();
          this._lb = null;
          this._rt = null;
        }
        var _proto = Shape.prototype;
        _proto.add = function add(position) {
          this._positions.push(position);
        };
        _proto.insert = function insert(index, position) {
          this._positions.splice(index, 0, position);
        };
        _proto.addIfNot = function addIfNot(position) {
          var found = false;
          this._positions.forEach(function (pos) {
            if (pos.equals(position)) {
              found = true;
            }
          });
          if (!found) {
            this._positions.push(position);
          }
        };
        _proto.addRow = function addRow(startCell, x, y) {
          for (var i = -x; i <= x; i++) {
            this._positions.push(new Vec2(startCell.x + i, startCell.y + y));
          }
        };
        _proto.get = function get() {
          return this._positions;
        };
        _proto.getSize = function getSize() {
          return this._positions.length;
        };
        _proto.isInShape = function isInShape(gridPoin) {
          // return this._positions.in != -1;
          return gridPoin.x >= this._lb.x && gridPoin.x <= this._rt.x && gridPoin.y >= this._lb.y && gridPoin.y <= this._rt.y;
        };
        _createClass(Shape, [{
          key: "lb",
          get: function get() {
            return this._lb;
          },
          set: function set(value) {
            this._lb = value;
          }
        }, {
          key: "rt",
          get: function get() {
            return this._rt;
          },
          set: function set(value) {
            this._rt = value;
          }
        }]);
        return Shape;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShapeBuilder.ts", ['cc', './Shape.ts', './Enumerations.ts'], function (exports) {
  var cclegacy, _decorator, Vec2, Shape, Position;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
    }, function (module) {
      Shape = module.Shape;
    }, function (module) {
      Position = module.Position;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ee478nqnRtMtptku/c9gAv6", "ShapeBuilder", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShapeBuilder = exports('ShapeBuilder', (_dec = ccclass('ShapeBuilder'), _dec(_class = /*#__PURE__*/function () {
        function ShapeBuilder() {}
        ShapeBuilder.getRectangle = function getRectangle(startCell, directionTo, shapeSize) {
          var shape = new Shape();
          var columns = shapeSize.x;
          var rows = shapeSize.y;
          var size = columns * rows;
          var gridCell = startCell.clone();
          var multiplierX = 1;
          var multiplierY = 1;

          // Direction определяет построение фигуры относительно начальной ячейки и центра координат
          // TODO: добавить RM, LM, TC, BC!!!!!!
          switch (directionTo) {
            case Position.C:
              {
                gridCell.set(startCell.x - Math.floor(columns / 2), startCell.y - Math.floor(rows / 2));
                shape.lb = new Vec2(gridCell);
                shape.rt = new Vec2(gridCell.clone().add(shapeSize.clone().subtract2f(1, 1)));
                break;
              }
            case Position.RT:
              {
                shape.lb = new Vec2(gridCell);
                shape.rt = new Vec2(gridCell.clone().add(shapeSize.clone().subtract2f(1, 1)));
                break;
              }
            case Position.RB:
              {
                multiplierY = -1;
                shape.lb = new Vec2(gridCell.x, gridCell.y - shapeSize.y + 1);
                shape.rt = new Vec2(gridCell.x + shapeSize.x - 1, gridCell.y);
                break;
              }
            case Position.LT:
              {
                multiplierX = -1;
                shape.lb = new Vec2(gridCell.x - shapeSize.x + 1, gridCell.y);
                shape.rt = new Vec2(gridCell.x, gridCell.y + shapeSize.y - 1);
                break;
              }
            case Position.LB:
              {
                multiplierX = -1;
                multiplierY = -1;
                shape.lb = new Vec2(gridCell.x - shapeSize.x + 1, gridCell.y - shapeSize.y + 1);
                shape.rt = new Vec2(gridCell);
                break;
              }
          }
          // TODO: Проверка если 3D то задавать "Y" если 2D, то "Z"
          // Сначало инкрементируем колонки а потом строки или слева направо и снизу вверх
          for (var i = 0; i < size; i++) {
            shape.add(new Vec2(gridCell.x + i % columns * multiplierX, gridCell.y + Math.floor(i / columns) * multiplierY));
          }

          // if (shape.lb && shape.rt)
          //     console.log("Shape lb, rt:", shape.lb.toString(), shape.rt.toString());
          return shape;
        };
        ShapeBuilder.getMidpointCircle = function getMidpointCircle(centerCell, distance) {
          var shape = new Shape();
          if (distance == 0) {
            shape.add(centerCell.clone());
          } else {
            var xt = Array.from(Array(distance + 1).keys());
            var x = 0;
            var y = distance;
            var d = 1 - distance;
            xt[y] = x;
            xt[x] = y;
            while (y > x) {
              if (d < 0) {
                d += 2 * x + 3;
              } else {
                d += 2 * (x - y) + 5;
                y--;
              }
              x++;
              if (x > xt[y]) xt[y] = x;
              if (y > xt[x]) xt[x] = y;
            }
            for (y = distance; y >= 1; y--) {
              shape.addRow(centerCell.clone(), xt[y], -y);
            }
            shape.addRow(centerCell.clone(), xt[0], 0);
            for (y = 1; y <= distance; y++) {
              shape.addRow(centerCell.clone(), xt[y], y);
            }
          }
          return shape;
        };
        return ShapeBuilder;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tile.ts", ['cc'], function (exports) {
  var cclegacy, _decorator, Label, Vec3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Vec3 = module.Vec3;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b9f50+MZAZCIqYZAR3U7aDF", "Tile", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Tile = exports('Tile', (_dec = ccclass('Tile'), _dec(_class = /*#__PURE__*/function () {
        function Tile() {
          this.node = null;
          this.pos = null;
          this.type = -1;
          this.tween = void 0;
          this._blockScale = new Vec3(0.5, 0.5, 1);
          this._blockSelectedScale = new Vec3(0.45, 0.45, 1);
          this._blockPos = new Vec3();
        }
        var _proto = Tile.prototype;
        _proto.updateLabel = function updateLabel() {
          this.node.getChildByName("Label").getComponent(Label).string = this.pos.toString();
        };
        _proto.init = function init() {
          this.node.active = true;
          this._blockPos = this.node.getPosition().clone();
          this.setSelected(false);
        };
        _proto.setSelected = function setSelected(selected) {
          if (selected === void 0) {
            selected = false;
          }
          if (selected) {
            this._blockPos = this.node.getPosition().clone();
            this.node.setScale(this._blockSelectedScale);
            this.node.setPosition(this._blockPos.clone().add(new Vec3(5, 5, 0)));
          } else {
            this.node.setScale(this._blockScale);
            this.node.setPosition(this._blockPos);
          }
        };
        return Tile;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});