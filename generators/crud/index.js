"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const _ = require("lodash");
module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Gracias por usar ${chalk.red("generator-dotnet-ca")} generator!`)
    );

    const prompts = [
      {
        type: "input",
        name: "project",
        message: "ProyectName",
        default: this.appname
      },
      {
        type: "input",
        name: "kebab",
        message: "Entity Name in kebab-case",
        default: "shawarma-de-carne"
      },
      {
        type: "input",
        name: "plural",
        message: "Plural Entity Name in kebab-case",
        default: "shawarmas-de-carne"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const cases = {
      camel: _.camelCase(this.props.kebab),
      pascal: _.upperFirst(_.camelCase(this.props.kebab)),
      plural: _.upperFirst(_.camelCase(this.props.plural))
    };
    const files = [
      {
        src: this.templatePath(
          "src/Domain/Events/Admin/EntityCreatedEvent.cs.js"
        ),
        out: this.destinationPath(
          `src/Domain/Events/Admin/${cases.pascal}CreatedEvent.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Domain/Events/Admin/EntityDeletedEvent.cs.js"
        ),
        out: this.destinationPath(
          `src/Domain/Events/Admin/${cases.pascal}DeletedEvent.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Domain/Events/Admin/EntityUpdatedEvent.cs.js"
        ),
        out: this.destinationPath(
          `src/Domain/Events/Admin/${cases.pascal}UpdatedEvent.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Commands/Create/CreateEntityCommand.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/Commands/Create/Create${cases.pascal}Command.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Commands/Delete/DeleteEntityCommand.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/Commands/Delete/Delete${cases.pascal}Command.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Commands/Update/UpdateEntityCommand.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/Commands/Update/Update${cases.pascal}Command.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/DTOs/CreateEntityDto.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/DTOs/Create${cases.pascal}Dto.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/DTOs/EntityDto.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/DTOs/${cases.pascal}Dto.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/DTOs/GetEntityListDto.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/DTOs/Get${cases.pascal}ListDto.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/EventHandlers/EntityCreatedEventHandler.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/EventHandlers/${cases.pascal}CreatedEventHandler.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/EventHandlers/EntityDeletedEventHandler.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/EventHandlers/${cases.pascal}DeletedEventHandler.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/EventHandlers/EntityUpdatedEventHandler.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/EventHandlers/${cases.pascal}UpdatedEventHandler.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Queries/Get/GetEntityListQuery.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/Queries/Get/Get${cases.pascal}ListQuery.cs`
        )
      },
      {
        src: this.templatePath("src/Application/Admin/EntityService.cs.js"),
        out: this.destinationPath(
          `src/Application/Admin/${cases.plural}/${cases.pascal}Service.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Common/Interfaces/IEntityService.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Common/Interfaces/I${cases.pascal}Service.cs`
        )
      },
      {
        src: this.templatePath("src/WebUI/Controllers/EntityController.cs.js"),
        out: this.destinationPath(
          `src/WebUI/Controllers/Admin/${cases.pascal}Controller.cs`
        )
      }
    ];

    const cont = {
      project: this.props.project,
      pascal: cases.pascal,
      camel: cases.camel,
      kebab: this.props.kebab,
      plural: cases.plural,
      read: this.props.kebab.replace("-", "_").toUpperCase() + "_READ",
      write: this.props.kebab.replace("-", "_").toUpperCase() + "_WRITE"
    };

    const copyOpts = {
      globOptions: {
        ignore: [".keep"]
      }
    };

    files.forEach(file => {
      this.fs.copyTpl(file.src, file.out, cont, copyOpts);
    });
  }

  install() {
    // This.installDependencies();
    // this.spawnCommandSync("dotnet", ["tool", "restore"]);
  }
};
