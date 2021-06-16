using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApiGestoria.Migrations
{
    public partial class inicial222 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateCreated",
                table: "Department");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateCreated",
                table: "Department",
                type: "datetime2",
                nullable: true);
        }
    }
}
