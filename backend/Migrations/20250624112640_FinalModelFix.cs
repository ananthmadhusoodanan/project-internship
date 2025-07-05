using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class FinalModelFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AssetClassification",
                table: "Equipments");

            migrationBuilder.DropColumn(
                name: "Code1",
                table: "Equipments");

            migrationBuilder.DropColumn(
                name: "Code2",
                table: "Equipments");

            migrationBuilder.DropColumn(
                name: "Code3",
                table: "Equipments");

            migrationBuilder.DropColumn(
                name: "StorageLocation",
                table: "Equipments");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Equipments",
                newName: "EquipmentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EquipmentId",
                table: "Equipments",
                newName: "Id");

            migrationBuilder.AddColumn<string>(
                name: "AssetClassification",
                table: "Equipments",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Code1",
                table: "Equipments",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Code2",
                table: "Equipments",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Code3",
                table: "Equipments",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "StorageLocation",
                table: "Equipments",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
