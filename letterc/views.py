#from django.shortcuts import render
# Create your views here.
from django.shortcuts import render,redirect
import sqlite3
from django.views.decorators.csrf import csrf_protect

def baruIndex(request):
    #db=sqlite3.connect('satu.db')
    return render(request,'index.html')

@csrf_protect
def createIndex(request):
    if request.method == "POST":
        nama = request.POST['nama']
        alamat = request.POST['alamat']
        prodi = request.POST['prodi']
        db = sqlite3.connect('crud.db')
        cur = db.cursor()
        cur.execute("INSERT INTO mahasiswa(nama,alamat,prodi) VALUES('" + nama + "','" + alamat + "','" + prodi + "') ")
        db.commit()
        return render(request,'berhasil.html')
    return render(request,'create.html')
@csrf_protect
def updateIndex(request):
    if request.method == "POST":
        nom = request.POST['nomor']
        db = sqlite3.connect('crud.db')
        cur = db.cursor()
        cur.execute("SELECT * FROM mahasiswa WHERE no='" + nom + "' ")
        isiupdate = cur.fetchone()
        return render(request,'update.html', {'isiupdate':isiupdate})
    return render(request,'update.html')

def deleteIndex(request):
    if request.method == "POST":
        nom = request.POST['nomor']
        db = sqlite3.connect('crud.db')
        cur = db.cursor()
        cur.execute("DELETE FROM mahasiswa WHERE no='" + nom + "' ")
        db.commit()
        return redirect('deleteIndex')
    db = sqlite3.connect('crud.db')
    cur = db.cursor()
    cur.execute("SELECT * FROM mahasiswa")
    hasilnya = cur.fetchall()
    return render(request,'delete.html',{'hasilnya':hasilnya})

def readIndex(request):
    #db=sqlite3.connect('satu.db')
    db = sqlite3.connect('crud.db')
    cur = db.cursor()
    cur.execute("SELECT * FROM mahasiswa")
    hasilnya = cur.fetchall()
    return render(request,'read.html',{'hasilnya':hasilnya})

def isiIndex(request):
    if request.method == "POST":
        nom = request.POST['nomor']
        nam = request.POST['nama']
        alam = request.POST['alamat']
        prod = request.POST['prodi']
        db = sqlite3.connect('crud.db')
        cur = db.cursor()
        cur.execute(
            "UPDATE mahasiswa SET nama='" + nam + "',alamat='" + alam + "',prodi='" + prod + "' WHERE no='" + nom + "'  ")
        db.commit()
        return redirect('readIndex')
    return render(request,'delete.html')

def loginIndex(request):
    if request.method == "POST":
        nom = request.POST['formemail']
        nam = request.POST['formpassword']
        db = sqlite3.connect('login.db')
        cur = db.cursor()
        cur.execute("SELECT COUNT(*) FROM pengguna WHERE email='"+nom+"' AND password='"+nam+"' ")
        berapa=cur.fetchone()[0]
        if berapa == 0:
            return render(request,'salah.html')
        else:
            return render(request,'admin.html')


