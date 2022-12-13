<?php

namespace App\Controller\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HotelController extends AbstractController
{
    #[Route('/hotels', name: 'hotels')]
    public function index(): Response
    {
        return $this->render('user/hotel/index.html.twig', [
            'controller_name' => 'HotelController',
        ]);
    }
}
