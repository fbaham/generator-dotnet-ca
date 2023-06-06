"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

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
        name: "pascal",
        message: "Entity Name in PascalCase",
        default: "ShawarmaDeCarne"
      },
      {
        type: "input",
        name: "camel",
        message: "Entity Name in camelCase",
        default: "shawarmaDeCarne"
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
        message: "Entity Name in plural",
        default: "ShawarmasDeCarne"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const files = [
      {
        src: this.templatePath(
          "src/Domain/Events/Admin/EntityCreatedEvent.cs.js"
        ),
        out: this.destinationPath(
          `src/Domain/Events/Admin/${this.props.pascal}CreatedEvent.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Domain/Events/Admin/EntityDeletedEvent.cs.js"
        ),
        out: this.destinationPath(
          `src/Domain/Events/Admin/${this.props.pascal}DeletedEvent.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Domain/Events/Admin/EntityUpdatedEvent.cs.js"
        ),
        out: this.destinationPath(
          `src/Domain/Events/Admin/${this.props.pascal}UpdatedEvent.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Commands/Create/CreateEntityCommand.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Commands/Create/Create${this.props.pascal}Command.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Commands/Delete/DeleteEntityCommand.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Commands/Delete/Delete${this.props.pascal}Command.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Commands/Load/LoadEntityCommand.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Commands/Load/Load${this.props.pascal}Command.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Commands/Update/UpdateEntityCommand.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Commands/Update/Update${this.props.pascal}Command.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/DTOs/CreateEntityDto.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/DTOs/Create${this.props.pascal}Dto.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/DTOs/EntityDto.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/DTOs/${this.props.pascal}Dto.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/DTOs/GetEntityListDto.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/DTOs/Get${this.props.pascal}ListDto.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/EventHandlers/EntityCreatedEventHandler.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/EventHandlers/${this.props.pascal}CreatedEventHandler.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/EventHandlers/EntityDeletedEventHandler.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/EventHandlers/${this.props.pascal}DeletedEventHandler.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/EventHandlers/EntityUpdatedEventHandler.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/EventHandlers/${this.props.pascal}UpdatedEventHandler.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Queries/Export/EntityFileRecord.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Queries/Export/${this.props.pascal}FileRecord.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Queries/Export/ExportEntityListQuery.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Queries/Export/Export${this.props.pascal}ListQuery.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Queries/Export/ExportEntityListVm.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Queries/Export/Export${this.props.pascal}ListVm.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Admin/Features/Queries/Get/GetEntityListQuery.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.plural}/Queries/Get/Get${this.props.pascal}ListQuery.cs`
        )
      },
      {
        src: this.templatePath("src/Application/Admin/EntityService.cs.js"),
        out: this.destinationPath(
          `src/Application/Admin/${this.props.pascal}Service.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Application/Common/Interfaces/IEntityService.cs.js"
        ),
        out: this.destinationPath(
          `src/Application/Common/Interfaces/I${this.props.pascal}Service.cs`
        )
      },
      {
        src: this.templatePath(
          "src/Infrastructure/Files/Maps/EntityRecordMap.cs.js"
        ),
        out: this.destinationPath(
          `src/Infrastructure/Files/Maps/${this.props.pascal}RecordMap.cs`
        )
      },
      // { src: this.templatePath('src/WebUI/ClientApp/src/app/admin/entity/entity.component.css.js'), out: this.destinationPath(`src/WebUI/ClientApp/src/app/admin/${this.props.kebab}/${this.props.kebab}.component.css`), },
      // { src: this.templatePath('src/WebUI/ClientApp/src/app/admin/entity/entity.component.html.js'), out: this.destinationPath(`src/WebUI/ClientApp/src/app/admin/${this.props.kebab}/${this.props.kebab}.component.html`), },
      // { src: this.templatePath('src/WebUI/ClientApp/src/app/admin/entity/entity.component.ts.js'), out: this.destinationPath(`src/WebUI/ClientApp/src/app/admin/${this.props.kebab}/${this.props.kebab}.component.ts`), },
      {
        src: this.templatePath("src/WebUI/Controllers/EntityController.cs.js"),
        out: this.destinationPath(
          `src/WebUI/Controllers/${this.props.pascal}Controller.cs`
        )
      }
    ];

    const cont = {
      project: this.props.project,
      pascal: this.props.pascal,
      camel: this.props.camel,
      kebab: this.props.kebab,
      plural: this.props.plural
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
    this.installDependencies();
  }
};
