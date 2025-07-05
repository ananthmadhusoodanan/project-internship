using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class CreateEquipmentTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Equipments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    EquipmentNumber = table.Column<string>(type: "TEXT", nullable: false),
                    DeviceType = table.Column<string>(type: "TEXT", nullable: false),
                    ModelNumber = table.Column<string>(type: "TEXT", nullable: false),
                    LotNo = table.Column<string>(type: "TEXT", nullable: false),
                    PurchaseDate = table.Column<string>(type: "TEXT", nullable: false),
                    AmortizationDate = table.Column<string>(type: "TEXT", nullable: false),
                    Status = table.Column<string>(type: "TEXT", nullable: false),
                    PurchasePrice = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<string>(type: "TEXT", nullable: false),
                    Type = table.Column<string>(type: "TEXT", nullable: false),
                    ProductName = table.Column<string>(type: "TEXT", nullable: false),
                    PackagePartNumber1 = table.Column<string>(type: "TEXT", nullable: false),
                    LotNo1 = table.Column<string>(type: "TEXT", nullable: false),
                    PackagePartNumber2 = table.Column<string>(type: "TEXT", nullable: false),
                    LotNo2 = table.Column<string>(type: "TEXT", nullable: false),
                    Remarks = table.Column<string>(type: "TEXT", nullable: false),
                    StorageLocation = table.Column<string>(type: "TEXT", nullable: false),
                    AssetClassification = table.Column<string>(type: "TEXT", nullable: false),
                    Code1 = table.Column<string>(type: "TEXT", nullable: false),
                    Code2 = table.Column<string>(type: "TEXT", nullable: false),
                    Code3 = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Equipments", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Equipments");
        }
    }
}
