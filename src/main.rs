use actix_files::{Files, NamedFile};
use actix_web::{web, App, HttpResponse, HttpServer, Result};
use rustls::internal::pemfile::{certs, rsa_private_keys};
use anyhow::Context;

async fn index() -> Result<NamedFile> {
    Ok(NamedFile::open("dist/index.html")?)
}


#[actix_web::main]
async fn main() -> anyhow::Result<()> {
    println!("www.onion-blog.jp");
    Ok(HttpServer::new(move || {
        App::new()
            //Svelte用
            .service(Files::new("/static", "./static").show_files_listing())
            //その他
            .service(Files::new("/assets", "./dist/assets").show_files_listing())
            .default_service(web::route().to(index))
    })
    .bind("localhost:8080")?
    .run()
    .await?)
}