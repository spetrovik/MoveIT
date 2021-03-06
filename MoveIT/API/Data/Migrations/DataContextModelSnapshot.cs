// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.3");

            modelBuilder.Entity("API.Entities.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("API.Entities.DistancePrice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Distance")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Price")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("DistancePrices");
                });

            modelBuilder.Entity("API.Entities.Offer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AtticArea")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Distance")
                        .HasColumnType("INTEGER");

                    b.Property<int>("DistancePricePerCar")
                        .HasColumnType("INTEGER");

                    b.Property<string>("From")
                        .HasColumnType("TEXT");

                    b.Property<int>("LivingArea")
                        .HasColumnType("INTEGER");

                    b.Property<int>("NumberOfCars")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PriceDistance")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SumPrice")
                        .HasColumnType("INTEGER");

                    b.Property<string>("To")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("VolumePrice")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Offers");
                });

            modelBuilder.Entity("API.Entities.VolumePrice", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AticArea")
                        .HasColumnType("INTEGER");

                    b.Property<int>("DistancePricePerCar")
                        .HasColumnType("INTEGER");

                    b.Property<int>("LivingArea")
                        .HasColumnType("INTEGER");

                    b.Property<int>("NumberOfCars")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Price")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("VolumePrices");
                });
#pragma warning restore 612, 618
        }
    }
}
