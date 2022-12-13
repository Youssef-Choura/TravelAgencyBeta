<?php

namespace App\Controller\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DestinationController extends AbstractController
{
    #[Route('/destinations', name: 'destinations')]
    public function index(): Response
    {
        return $this->render('user/destination/index.html.twig', [
            'controller_name' => 'DestinationController',
        ]);
    }
}
