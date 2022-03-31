using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class Offers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Offers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    From = table.Column<string>(type: "TEXT", nullable: true),
                    To = table.Column<string>(type: "TEXT", nullable: true),
                    Distance = table.Column<int>(type: "INTEGER", nullable: false),
                    PriceDistance = table.Column<int>(type: "INTEGER", nullable: false),
                    LivingArea = table.Column<int>(type: "INTEGER", nullable: false),
                    AtticArea = table.Column<int>(type: "INTEGER", nullable: false),
                    NumberOfCars = table.Column<int>(type: "INTEGER", nullable: false),
                    DistancePricePerCar = table.Column<int>(type: "INTEGER", nullable: false),
                    VolumePrice = table.Column<int>(type: "INTEGER", nullable: false),
                    SumPrice = table.Column<int>(type: "INTEGER", nullable: false),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Offers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Offers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Offers_UserId",
                table: "Offers",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Offers");
        }
    }
}
